import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import event3 from '../Images/pm.jpg';
import event1 from '../Images/pm.jpg';
import event2 from '../Images/pm.jpg';
import 'bootstrap/dist/js/bootstrap.min.js';
import { EventCard } from '../pages/EventsPage';
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";



const Home = ({ isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [userEvents, setUserEvents] = useState([]);

    // Token validation
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsLoggedIn(false);
            navigate("/login");
            return;
        }

        const validateToken = async () => {
            try {
                const res = await fetch("http://localhost:8080/user/validate", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    localStorage.clear();
                    setIsLoggedIn(false);
                    navigate("/login");
                }
            } catch (error) {
                console.error("Token validation error:", error);
                localStorage.clear();
                setIsLoggedIn(false);
                navigate("/login");
            }
        };

        validateToken();
    }, [navigate, setIsLoggedIn]);

    // Fetch all events
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/event/getAllEvents");
                const result = await response.json();
                setItems(result);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchData();
    }, []);

    const location = useLocation();
    const [user, setUser] = useState(null);

    // Store user from location or localStorage
    useEffect(() => {
        const user1 = location.state?.items;
        if (user1) {
            setUser(user1);
            localStorage.setItem("user", JSON.stringify(user1));
        } else {
            const stored = localStorage.getItem("user");
            if (stored) {
                setUser(JSON.parse(stored));
            }
        }

        const token = localStorage.getItem("token");
        if (!token) {
            setIsLoggedIn(false);
            navigate("/login");
        }
    }, [location.state, navigate, setIsLoggedIn]);

    const [items1, setItems1] = useState([]);

    // Fetch user attendances
    useEffect(() => {
        if (!user || !user.UserID) return;

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/user/getAttendancesForUser?userId=${user.UserID}`);
                const result = await response.json();
                setItems1(result);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchData();
    }, [user]);

    // Filter user events from all events
    useEffect(() => {
        if (items.length > 0 && items1.length > 0) {
            const eventsid = new Set(items1.map(att => att.eventId));
            const filtered = items.filter(event => eventsid.has(event.id));
            setUserEvents(filtered);
        }
    }, [items, items1]);

    // Upcoming events (next 3)
    const upcomingEvents = items
        .filter(event => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ height: '60vh' }}>
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src={event1} className="d-block w-100" alt="first-event" />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={event2} className="d-block w-100" alt="second-event" />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={event3} className="d-block w-100" alt="third-event" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container main-cont py-4">
                <h1
                    style={{ alignSelf: 'center', marginTop: '50px', justifySelf: 'center' }}
                    className="animate"
                >
                    Welcome to <span>T</span><span>A</span><span>S</span><span>K</span>
                    <span>M</span><span>A</span><span>S</span><span>T</span><span>E</span><span>R</span>
                </h1>

                <p style={{ alignSelf: 'center', marginBottom: '50px', fontStyle: 'oblique', justifySelf: 'center' }}>
                    Life is made of moments. Make yours count.
                </p>
                <h2 style={{ marginBottom: '50px' }}>
                    Upcoming Tasks...
                </h2>
                <div className="py-4">
                    <div className="row g-2">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="col-12 col-md-6 col-lg-4">
                                <EventCard event={event} />
                            </div>
                        ))}
                        <Link to="/events" style={{ display: 'inline-block' }}>see more...</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

console.log("Home loaded");
