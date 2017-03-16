<template>
    <textarea></textarea>
</template>

<script>
    if (!window.KindEditor) {
        require('../../../content/kindeditor/kindeditor-min.js')
        KindEditor.basePath = '../../../content/kindeditor/'
    }

    export default {
        name: 'kindeditor',
        data() {
            return {
                _init: true
            }
        },
        props: {
            value: String,
            options: {
                type: Object,
                required: false,
                default() {
                    return {
                        width: '100%',
                        height: '400px',
                        filterMode: true
                    }
                }
            }
        },
        mounted() {
            if (this.$el) {
                Object.assign(KindEditor.options, this.options || {});

                let self = this;
                self.editor = KindEditor.create(this.$el, {
                    uploadJson: '../../../content/kindeditor/asp.net/upload_json.ashx',
                    allowFileManager: false,
                    filterMode: this.options.filterMode,
                    afterBlur: function () {
                        // 触发input事件以同步value值
                        const html = this.html();
                        self.$emit('input', html);
                    }
                });
            }
        },
        watch: {
            'value'(newVal, oldVal) {
                // 仅在首次加载时设置编辑器的内容
                if (this.editor && this._init) {
                    this._init = false;

                    if (newVal) {
                        this.editor.html(newVal);
                    } else if (!newVal) {
                        this.editor.text('');
                    }
                }
            }
        }
    }

</script>