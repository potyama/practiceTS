import { Dialog, Transition } from "@headlessui/react";
import { Button, IconPlus, IconX } from "@supabase/ui";
import add from "public/add.png";
import { Fragment, useCallback, useState, VFC } from "react";
import { client } from "../libs/supabase";

type props = {
    uuid: string;
    getAreaList: VoidFunction;
};

export const AddArea: VFC<props> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [area, setArea] = useState<string>("");

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const closeModal = useCallback(() => {
        setArea("");
        setIsOpen(false);
    }, []);

    const handleAdd = useCallback(
        async (uuid: string) => {
            if (area == "") {
                alert("Input area name");
                return;
            }
            const { data, error } = await client
                .from("getinfo")
                .insert([{ id: uuid, area_name: area }]);
            if (error) {
                alert(error);
            } else {
                if (data) {
                    props.getAreaList();
                    closeModal();
                }
            }
        },
        [area, props, closeModal]
    );

    return (
        <>
            <div className="p-2 border cursor-pointer" onClick={openModal}>
                <div className="flex justify-center">
                    <Image src={add} alt="thumbnail" width={126} height={200} />
                </div>
                <div className="mt-2 text-center">ADD NEW</div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center border-2">
                        <span className="inline-block h-screen align-middle" area-hidden="true">&#8203;</span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="Opacity-0 scale-95">
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform border border-gray-300 shadow-xl bg-gray-50 rounded-xl">
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
            )
}