import { Container } from '@/_components/blocks';
import { Button } from '@/_components/form';
import InputText from '@/_components/form/InputText/InputText';
import InputTextarea from '@/_components/form/InputTextarea/InputTextarea';
import clsx from 'clsx';
import React, { FormEvent, useState } from 'react';

type Props = {
    className?: string,

};

const Contact: React.FC<Props> = (props) => {
    const { className = '' } = props;
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const handleOnNameChange = (changedValue: string) => {
        setName(changedValue);
    }

    const handleOnEmailChange = (changedValue: string) => {
        setMail(changedValue);
    }

    const handleOnMessageChange = (changedValue: string) => {
        setMessage(changedValue);
    }

    const handleOnFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section className={clsx(className, ["relative bg-base"])} id="contact">
            <Container className={clsx(["flex flex-col py-10"], ["lg:flex-row"])}>
                <div className="w-full"></div>
                <form className='flex flex-col gap-5 w-full' onSubmit={handleOnFormSubmit}>
                    <h2 className={clsx(["font-700 text-md text-white"])}>
                        Lets build something amazing together!
                    </h2>
                    <InputText
                        id={"INPUT_NAME"}
                        label={'Name'}
                        placeholder={"Enter your name"}
                        value={name}
                        onChange={handleOnNameChange}
                    />
                    <InputText
                        id={"INPUT_EMAIL"}
                        label={'Email'}
                        placeholder={"Enter your email"}
                        value={mail}
                        onChange={handleOnEmailChange}
                    />
                    <InputTextarea
                        id={'INPUT_MSG'}
                        label={'Message'}
                        placeholder={"Enter your message"}
                        value={message}
                        onChange={handleOnMessageChange}
                    />
                    <Button
                        id={'CONTACT_SBUBMIT_BTN'}
                        size={"md"}
                        label={'Submit'}
                        btnType="submit"
                    // varient={"outlined"}
                    />
                </form>
            </Container>
        </section>
    );
}

export default Contact;