import React, { Component, Fragment } from 'react'

const MAX_TIME = 3 // 테스트 후 60으로 변경

class Timer extends Component {
    state = {
        h: '00',
        m: '00',
        s: '00'
    }

    timer = null

    // 1 -- return  --> 01
    // 10 -- return --> 10
    formatting = num =>
        num < 10 && num.toString().length === 1 ? `0${num}` : num

    componentDidMount() {
        this.props.start()
        this.timer = setInterval(() => {
            this.setState(
                () => {
                    const next = Number(this.state.s) + 1

                    return {
                        s: this.formatting(next)
                    }
                },
                () => {
                    if (this.state.s >= MAX_TIME) {
                        this.setState(
                            {
                                s: '00',
                                m: this.formatting(Number(this.state.m) + 1)
                            },
                            () => {
                                if (this.state.m >= MAX_TIME) {
                                    this.setState({
                                        m: '00',
                                        h: this.formatting(
                                            Number(this.state.h) + 1
                                        )
                                    })
                                }
                            }
                        )
                    }
                }
            )
        }, 1 * 1000)
    }

    componentWillUnmount() {
        if (this.timer) {
            const { h, m, s } = this.state
            this.props.stop(`${h}:${m}:${s}`)
            clearInterval(this.timer)
        }
    }

    render() {
        const { h, m, s } = this.state
        return (
            <Fragment>
                <span className="hour">{h}</span>:
                <span className="minute">{m}</span>:
                <span className="second">{s}</span>
            </Fragment>
        )
    }
}

export default Timer
