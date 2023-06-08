"use client"

import { FormEvent, useState } from "react";

type Props = {
    dict: any
};

const Registration = (props: Props) => {

    const [success, setSuccess] = useState<boolean>(false);

    const onSubmit = async (ev: FormEvent<HTMLFormElement>): Promise<void> => {
        ev.preventDefault();
    }

    return (
        <div className="pt-24 sm:pt-20 px-16 flex justify-center">
            <form action="#" onSubmit={onSubmit}>
                <div className="flex flex-col container py-32 px-20 mt-12 space-y-5 shadow-lg rounded-lg">

                    <label>
                        email 
                        <br />
                        <input type="text" id="email" placeholder="Gbela.egy.f@gmail.com" />
                    </label>
                    
                    <label>
                        Name
                        <br />
                        <input type="text" id="name" placeholder="Béla" />
                    </label>

                    <label>
                        Password
                        <br />    
                        <input type="password" id="password" placeholder="***" />
                    </label>

                    <input type="submit" value="Registration" />
                </div>
            </form>
        </div>
    );
};

export default Registration;