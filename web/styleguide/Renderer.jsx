import React, {PropTypes} from 'react'
import classnames from 'classnames'
import styles from '../app/stylesheet.scss'

import s from './Layout.css'

const Renderer = ({title, components, toc, sidebar}) => (
    <div className={classnames(s.root, {[s.withoutSidebar]: !sidebar})}>
        <main className={s.wrapper}>
            <div className={s.content}>
                <div className={s.components}>
                    {components}
                    <footer className={s.footer}>
                        Generated with <a className={s.link} href="https://github.com/sapegin/react-styleguidist">React Styleguidist</a>
                    </footer>
                </div>
            </div>
            <div className={s.sidebar}>
                <h1 className={s.heading}>{title}</h1>
                {toc}
            </div>
        </main>
    </div>
)

Renderer.propTypes = {
    components: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    toc: PropTypes.node.isRequired,
    sidebar: PropTypes.bool,
}

export default Renderer
