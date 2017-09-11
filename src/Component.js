/**
 * Created by apple on 2017/7/20.
 */
import render from './render'
import { getDOM } from './util'

export default class Component {
    constructor(props) {
        this.props = props
    }

    setState(state) {
        setTimeout(() => {
            this.state = state
            const vnode = this.render()
            let olddom = getDOM(this)
            const startTime = new Date().getTime()
            render(vnode, olddom.parentNode, this, this.__rendered)
            console.log("duration:", new Date().getTime() - startTime)
        }, 0)
    }
}
