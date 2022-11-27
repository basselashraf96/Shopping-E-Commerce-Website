import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../api";
import { Link } from "react-router-dom";
import { logout } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const dispatch = useDispatch();
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const handleClick = () => {
    logout(dispatch);
  };

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active Users": item.total },
          ]);
        });
      } catch (error) {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <Link to="/login">
        <button onClick={handleClick} className="signOut">
          Sign Out
        </button>
      </Link>

      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
