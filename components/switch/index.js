Component({
    properties: {
        checked: {
            type: Boolean,
            value: false,
        },
        color: {
            type: String,
            value: '#00A3FF',
        },
    },

    methods: {
        handle() {
            this.setData({
                checked: !this.data.checked,
            });
            this.triggerEvent('change', { checked: this.data.checked }, {});
        },
    },
});
