import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Pizzas(props) {

    const columns = ['Order ID', 'Size', 'Crust', 'Toppings', 'Status'];
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pizzas</h2>}
        >
            <Head title="Pizzas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Table 
                        columns={columns} 
                        rows={props.pizzas.map(pizza => ({
                            id: pizza.id,
                            'order id': `#${pizza.id}`,
                            size: pizza.size,
                            crust: pizza.crust,
                            toppings: pizza.toppings,
                            status: pizza.status
                        }))} 
                        primary="Order ID" 
                        actions="pizzas.edit" 
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
