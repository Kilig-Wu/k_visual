import { defineComponent } from "vue"
import s from "./HomePageScene..module.sass"
export default defineComponent({
	name: "HomePageScene",
	setup() {
		console.log(123123)
		return () => (
			<div class={s.container}>
				<a-tabs>
					<a-tab-pane key="1" tab="Tab 1">
						Content of Tab Pane 1
					</a-tab-pane>
					<a-tab-pane key="2" tab="Tab 2" force-render>
						Content of Tab Pane 2
					</a-tab-pane>
					<a-tab-pane key="3" tab="Tab 3">
						Content of Tab Pane 3
					</a-tab-pane>
				</a-tabs>
			</div>
		)
	},
})
