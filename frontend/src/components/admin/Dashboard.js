
import Loader from '../layout/Loader';
import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { getAdminStats } from "../../redux/action/admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, userCount, orderCount, totalIncome } = useSelector(
    (state) => state.admin
  );
console.log()
  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: orderCount
          ? [orderCount.preparing, orderCount.shipped, orderCount.delivered]
          : [0, 0, 0],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
      {loading === false ? (
        <main>
          <article>
            <Box title="Users" value={userCount} />
            <Box title="Orders" value={orderCount?.total} />
            <Box title="Income" value={totalIncome} />
          </article>

          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>

            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;