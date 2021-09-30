import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value: string
    item: ItemType[]
}


export const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    const [hoveredItem, setHoveredItem] = useState('1')
    const [value, setValue] = useState('none')

    const onSelectValueHandler = (value: string) => {
        const selectedItem = props.item.find(item => item.value === value)
        if (selectedItem) {
            setValue(selectedItem.title)
            setCollapsed(false)
        }
    }

    const onHoverHandler = (value: string) => {
        setHoveredItem(value)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setCollapsed(false)
            return
        }
        if (e.key === ' ') {
            setCollapsed(!collapsed)
            return
        }
        if (e.key === 'Enter') {
            onSelectValueHandler(hoveredItem)
        }
        for (let i = 0; i < props.item.length; i++) {
            if (hoveredItem === props.item[i].value) {
                if (e.key === 'ArrowUp') {
                    if (props.item[i - 1] !== undefined) {
                        setHoveredItem(props.item[i - 1].value)
                        break
                    }

                } else if ((e.key === 'ArrowDown')) {
                    if (props.item[i + 1] !== undefined) {
                        setHoveredItem(props.item[i + 1].value)
                        break
                    }
                }
            }
        }
    }

    const onChangeSelectInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input type={"text"}
                   onKeyDown={onKeyHandler}
                   tabIndex={0}
                   className={styles.fieldSelect}
                   onClick={() => setCollapsed(!collapsed)}
                   value={value}
                   onChange={onChangeSelectInput}
            />

            <div className={collapsed ? styles.options : ''}>
                {collapsed && props.item.map(item =>
                    <div className={`${styles.optionItem} ${item.value === hoveredItem ? styles.hoverItem : ''}`}
                         onMouseEnter={() => onHoverHandler(item.value)}
                         onClick={() => onSelectValueHandler(item.value)}

                    >{item.title}
                    </div>)

                }
            </div>

        </div>
    )
}