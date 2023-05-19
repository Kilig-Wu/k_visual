import { defineComponent } from "vue";

export default defineComponent({
	name: "HelloWorld",
    data() {
        return {
            message: "hello"
        }
    },
	setup(props, ctx) {
        console.log(props, ctx)
		return () => <div>{"123"}</div>;
	},
});
