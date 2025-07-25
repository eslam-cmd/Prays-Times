import usePrayerTimes from "../Api/UsePrayerTimes";

// eslint-disable-next-line react/prop-types
const Header = ({ setCity, city }) => {
    const { cities } = usePrayerTimes(city); 

    return (
        <div className="heading">
            <div className="city">
                <h4>City</h4>
                <select
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                >
                    {cities.map((cityOption, index) => (
                        <option key={index} value={cityOption.value}>
                            {cityOption.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="date">
                <h4>Date</h4>
                <h5>{new Date().toLocaleDateString("EG")}</h5>
            </div>
        </div>
    );
};

export default Header;
