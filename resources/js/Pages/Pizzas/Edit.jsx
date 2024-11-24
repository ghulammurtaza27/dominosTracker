import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function Edit({ auth, pizza }) {
    const { data, setData, patch, processing, errors, recentlySuccessful } = useForm({
        size: pizza.size || '',
        crust: pizza.crust || '',
        toppings: Array.isArray(pizza.toppings) ? pizza.toppings : [],
        status: pizza.status || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('pizzas.update', pizza.id), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order #{pizza.id}</h2>}
        >
            <Head title={`Order #${pizza.id}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Size Field */}
                                <div>
                                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                                        Size
                                    </label>
                                    <select
                                        id="size"
                                        value={data.size}
                                        onChange={e => setData('size', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    >
                                        <option value="">Select a size</option>
                                        <option value="Small">Small</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Large">Large</option>
                                    </select>
                                    {errors.size && <div className="text-red-500 text-sm mt-1">{errors.size}</div>}
                                </div>

                                {/* Crust Field */}
                                <div>
                                    <label htmlFor="crust" className="block text-sm font-medium text-gray-700">
                                        Crust
                                    </label>
                                    <select
                                        id="crust"
                                        value={data.crust}
                                        onChange={e => setData('crust', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    >
                                        <option value="">Select a crust</option>
                                        <option value="Thin">Thin</option>
                                        <option value="Thick">Thick</option>
                                        <option value="Stuffed">Stuffed</option>
                                    </select>
                                    {errors.crust && <div className="text-red-500 text-sm mt-1">{errors.crust}</div>}
                                </div>

                                {/* Toppings Field */}
                                <div className="col-span-2">
                                    <label htmlFor="toppings" className="block text-sm font-medium text-gray-700">
                                        Toppings
                                    </label>
                                    <div className="mt-2 grid grid-cols-3 gap-2">
                                        {[
                                            'Pepperoni',
                                            'Mushroom',
                                            'Green Pepper',
                                            'Extra Cheese',
                                            'Onions',
                                            'Sausage',
                                            'Bacon',
                                            'Black Olives'
                                        ].map((topping) => (
                                            <label key={topping} className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                    checked={data.toppings.includes(topping)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            if (!data.toppings.includes(topping)) {
                                                                setData('toppings', [...data.toppings, topping]);
                                                            }
                                                        } else {
                                                            setData('toppings', data.toppings.filter(t => t !== topping));
                                                        }
                                                    }}
                                                />
                                                <span className="ml-2">{topping}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.toppings && <div className="text-red-500 text-sm mt-1">{errors.toppings}</div>}
                                </div>

                                {/* Status Field */}
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={e => setData('status', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    >
                                        <option value="Ordered">Ordered</option>
                                        <option value="Prepping">Prepping</option>
                                        <option value="Baking">Baking</option>
                                        <option value="Checking">Checking</option>
                                        <option value="Ready">Ready</option>
                                    </select>
                                    {errors.status && <div className="text-red-500 text-sm mt-1">{errors.status}</div>}
                                </div>
                            </div>

                            {/* Submit Button and Success Message */}
                            <div className="mt-6 flex items-center gap-x-6">
                               
                                <a
                                    href={route('pizzas.index')}
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Cancel
                                </a>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${processing ? 'bg-gray-400' : 'bg-indigo-600 text-white'}`}
                                >
                                    {processing ? 'Saving...' : 'Save Changes'}
                                </button>
                                {recentlySuccessful && (
                                    <p className="text-sm text-gray-600">Saved.</p>
                                )}
                              
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
