import { Dispatch, SetStateAction } from 'react'
import Modal, { Props } from 'react-modal'

import styles from './styles.module.css'

export interface IModalProps extends Props {
    isOpen: boolean
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
    children: any
}

const CustomModal = ({
    isOpen,
    setModalIsOpen,
    children,
    ...props
}: IModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={(e) => {
                setModalIsOpen(false)
                props?.onRequestClose && props.onRequestClose(e)
            }}
            contentLabel={props.contentLabel ?? 'Modal'}
            className={styles.root}
        >
            {children}
        </Modal>
    )
}

export default CustomModal
