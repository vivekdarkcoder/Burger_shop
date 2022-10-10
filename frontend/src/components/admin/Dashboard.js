import React from 'react'
import { Link } from 'react-router-dom'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJs, Tooltip, ArcElement, Legend } from "chart.js"
import Loder from '../layout/Loder';

ChartJs.register(Tooltip, ArcElement, Legend);
const loading = false;

const Box = ({ title, value }) => (
    <div>
        <h3>
            {title === "Incomes" && "₹"}
            {value}
        </h3>
        <p>{title}</p>
    </div>

);
const Dashboard = () => {

    const data = {
        labels:["Preparing", "Shipped", "Delivery"],
        datasets: [
            {
                label: "# of order",
                data: [2, 3, 4],
                backgroundColor: ["rgba(159, 63, 176, 0.1)", "rgba(78, 63, 176, 0.2)", "rgba(156, 0, 60, 0.3)"],
                borderColor: ["rgb(159, 63, 176)", "rgb(78, 63, 176)", "rgb(156, 0, 60)"],
                borderWidth: 1,
            }
        ]
    }
    return (
        <section className="dashboard">
             {
                loading === false ?
                <main>
                <article>
                    <Box title="users" value={213} />
                    <Box title="Orders" value={213} />
                    <Box title="incomes" value={0} />

                </article>
                <section>
                    <div>
                        <Link to="/admin/orders">View Orders</Link>
                        <Link to="/admin/users">View Users</Link>
                    </div>
                    <aside>

                        <Doughnut data={data}/>
                    </aside>
                </section>
            </main> : <Loder/>
             }
        </section>
    )
}

export default Dashboard