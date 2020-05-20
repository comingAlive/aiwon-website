import React, {useRef, useState} from "react";
import {Check, Lock} from 'react-feather'


const Login = () => {
    const [lock, setLock] = useState(false)
    const [secured, setSecured] = useState(false)
    const [input, setInput] = useState('')
    const [inputHover, setInputHover] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)
    let button: string = buttonHover ? 'button mouseOn' : 'button';
    let password: string = inputHover ? 'password mouseOn' : 'password';

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    };

    const lockFunc =()=> {
        setInput('Access Denied')
        setSecured(false)
        formRef.current!.style.animation = 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
        formRef.current!.style.transform = 'translate3d(0, 0, 0)'
        formRef.current!.style.perspective = '1000px'
        inputRef.current!.className = 'password colorizer'
        inputRef.current!.disabled = true
        setLock(true)
    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    };

    function enterPressHandler(event: { key: string; }) {
        if (event.key === 'Enter') {
            lockFunc()
        }
    }

    function onClickHandler() {
        setSecured(true)
    }

    const inputRef = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    function onMouseClick() {
        lockFunc()
        setInputHover(false)
        setButtonHover(false)
    }

    return <form onSubmit={submitHandler}
                 className="container"
                 id="myForm"
                 ref={formRef}
    >
        <input
            onClick={!lock ? onClickHandler : undefined}
            ref={inputRef}
            onKeyPress={enterPressHandler}
            onChange={inputHandler}
            onMouseOver={!lock ? () => setInputHover(true) : undefined}
            onMouseOut={() => setInputHover(false)}
            className={password}
            id={secured ? 'secured' : ''}
            maxLength={4}
            value={input}
            placeholder={'Ограниченный вход'}
            type="text"
        />
        <a
            onClick={onMouseClick}
            onMouseOver={!lock ? () => setButtonHover(true) : undefined}
            onMouseOut={() => setButtonHover(false)}
            className={button} id="submit">
            {lock ? <Lock size={'30px'} color={'#9dabc0'}/> : <Check size={'30px'} color={'#9dabc0'}/>}
            {/*<i className="icon" data-feather="check"/>*/}
        </a>
    </form>;
};

export default Login;