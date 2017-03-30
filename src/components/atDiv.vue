<template>
    <div>
        <div contenteditable="true"
             v-html="value"
             @input="changeText"
             @blur="submit">
        </div>
        <div v-show="showSelect">
            <input type="text" v-model="searchText">
            <ul>
                <li @click="sDone({fullName:'所有人'})">
                    <span>所有</span>
                </li>
                <li @click="sDone(person)" v-for="person in atList">
                    <span>{{person.fullName}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
</style>
<script>
    var lastSelection = null;
    export default {
        props: ['value', 'atList'],
        data(){
            return {
                showSelect: false,
                searchText: ''
            }
        },
        methods: {
            changeText(){
                let selection = getSelection();
                let char = selection.focusNode.data && selection.focusNode.data.slice(selection.focusOffset - 1, selection.focusOffset);
                if (char == '@') {
                    this.showSelect = true;
                    lastSelection = {
                        range: selection.getRangeAt(0),
                        offset: selection.focusOffset,
                        selection: selection
                    };
                } else {
                    this.$emit('input', this.$el.children[0].innerHTML);
                }
            },
            sDone(person){
                this.showSelect = false;
                this.$el.children[0].focus();
                var selection = lastSelection.selection;
                var range = lastSelection.range;
                var textNode = range.startContainer;
                range.setStart(textNode, range.endOffset - 1);
                range.setEnd(textNode, range.endOffset);
                range.deleteContents();
                var spanNode1 = document.createElement('span');
                var spanNode2 = document.createElement('span');
                var spanNode3 = document.createElement('span');
                spanNode1.className = 'at-text';
                spanNode1.innerHTML = '@' + person.fullName;
                spanNode2.innerHTML = '&nbsp;';
                spanNode2.contentEditable = true;
                spanNode3.innerHTML = '&nbsp;';
                var frag = document.createDocumentFragment(), node, lastNode;
                while ((node = spanNode2.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                frag.appendChild(spanNode1);
                while ((node = spanNode3.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);
                selection.extend(lastNode, 1);
                selection.collapseToEnd();
                this.$emit('input', this.$el.children[0].innerHTML);
            },
            submit(){
                this.$emit('input', this.$el.children[0].innerHTML);
            }
        }
    }
</script>
