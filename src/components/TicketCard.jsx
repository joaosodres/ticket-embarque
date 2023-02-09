import TicketTitle from './TicketTitle';
import { IoIosAirplane } from 'react-icons/io';

export default function CartaoEmbarque() {
    return (
        <div >
            <TicketTitle />
            <div className=" mx-auto  rounded-3xl grid divide-y-2 divide-gray-300 divide-dashed">
                <div className="py-6 px-8 rounded-3xl bg-white">
                    <div className="">
                        <div className="flex justify-between">
                            <p>Voo</p>
                            <p>Data</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-bold">R$995</p>
                            <p className="font-bold">23/05/2023</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between text-sm text-black/64  ">
                            <p>São Paulo, Brasil</p>
                            <p>São Francisco, EUA</p>
                        </div>
                        <div className="flex justify-between items-center mt-1 font-bold">
                            <p className="text-4xl">GRU</p>
                            <IoIosAirplane size={32} />
                            <p className="text-4xl">SFO</p>
                        </div>
                        <div className="flex justify-between">
                            <p>17:00</p>
                            <div className="flex">
                                <p>04:48</p>
                                <p className="text-xs">+1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl bg-white">
                    <div className="px-8 py-6">
                        <div className="flex justify-between text-black/64">
                            <p>Passageiro</p>
                            <p>Assento</p>
                        </div>
                        <div className="flex justify-between font-bold">
                            <p>João Victor Sodré</p>
                            <p>28A</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl bg-white">
                    <div className="px-8 py-6">
                        <div className="grid grid-cols-2">
                            <div className="text-sm">
                                <div>
                                    <p className="text-black/64">Embarque</p>
                                    <p className="bg-purple-650 text-white text-center w-14 px-2 py-1  rounded-md">16:15</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-black/64">Terminal</p>
                                    <p className="font-bold">2</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-black/64">Portão</p>
                                    <p className="font-bold">15</p>
                                </div>

                            </div>
                            <div className="">
                                <img src="vector.png" alt="QR Code" />
                                <p className="text-xs text-center mt-2 text-black/64">Grupo de embarque:3</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <p><span className="font-bold">Atenção:</span> o portão fecha 16:45</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mt-5 text-sm text-center text-gray-400">Qualquer problema procure o balcão de <br /> atendimento da sua companhia aérea</h1>
        </div>
    );
}