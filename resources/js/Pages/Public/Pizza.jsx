import { Head, router } from '@inertiajs/react';
import { useEffect } from "react";

const statusSteps = [
    { name: 'ORDERED', status: 'Ordered' },
    { name: 'PREP', status: 'Prepping' },
    { name: 'BAKE', status: 'Baking' },
    { name: 'QUALITY CHECK', status: 'Checking' },
    { name: 'READY', status: 'Ready' }
];

export default function Pizza({ pizza }) {
    const getClass = (step, index) => {
        let baseClasses = 'flex-1 flex items-center justify-center h-20 border-r-2 transition-all';

        if (index === 0) {
            baseClasses += ' rounded-l-full';
        }

        if (index === (statusSteps.length - 1)) {
            baseClasses = baseClasses.replace('border-r-2', 'rounded-r-full');
        }

        if (step.status === pizza.status) {
            baseClasses = baseClasses.replace('border-r-2', '');
            return `${baseClasses} bg-[#E31837] scale-110 shadow-lg z-10`;
        }

        if (statusSteps.findIndex(s => s.status === pizza.status) > index) {
            return `${baseClasses} bg-[#00A9E0] border-white`;
        }

        return `${baseClasses} bg-[#006491] border-white`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ['pizza'] });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Head title={`Track Your Order #${pizza.id}`} />
            
            {/* Header Bar */}
            <div className="bg-[#006491] text-white p-4">
                <div className="max-w-4xl mx-auto flex items-center">
                    <button className="text-4xl font-bold mr-8">&larr;</button>
                    <div>
                        <div className="text-4xl font-bold">Back</div>
                        <h1 className="text-4xl font-bold">Track Your Order</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-8 px-4">
                {/* Logo */}
                <div className="py-8">
                    <svg className="w-32 h-32 rotate-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 0h512v512H0z" fill="#fff" fillOpacity="1"></path>
                        <g transform="translate(0,0)">
                            <path
                                d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                                fill="#006491" fillOpacity="1">
                            </path>
                        </g>
                    </svg>
                </div>

                {/* Domino's Tracker Title */}
                <h2 className="text-[#006491] text-6xl font-bold text-center mb-6">
                    DOMINO'S TRACKER®
                </h2>

                {/* Estimated Time */}
                <p className="text-[#006491] text-3xl text-center mb-8">
                    Current estimated pickup time 20 - 25 mins
                </p>

                {/* Tracker Bar */}
                <div className="relative mb-8">
                    <div className="flex border-4 border-[#006491] rounded-full overflow-hidden">
                        {statusSteps.map((step, index) => (
                            <div
                                key={index}
                                className={getClass(step, index)}
                            >
                                <span className="text-white font-bold text-xl tracking-wide text-center">
                                    {step.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Status Message */}
                <p className="text-[#006491] text-3xl text-center mb-12">
                    {pizza.chef} began {pizza.status.toLowerCase()} your order at {pizza.last_updated}
                </p>

                {/* Patent Number */}
                <p className="text-gray-500 text-center text-xl mb-8">
                    U.S. PATENT #10,262,281
                </p>
            </div>
        </div>
    );
}
