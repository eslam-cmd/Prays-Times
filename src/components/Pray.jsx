import usePrayerTimes from "../Api/UsePrayerTimes";

// eslint-disable-next-line react/prop-types
const Pray = ({ city }) => {
    const { prayerTimes } = usePrayerTimes(city); 
    console.log("Pray Component:", prayerTimes);

    const prayers = [
        { name: "Fajr", time: prayerTimes.Fajr },
        { name: "Dhuhr", time: prayerTimes.Dhuhr },
        { name: "Asr", time: prayerTimes.Asr },
        { name: "Maghrib", time: prayerTimes.Maghrib },
        { name: "Isha", time: prayerTimes.Isha }
    ];

    return (
        <div className="prayer-times">
            {prayers.map((pray, index) => (
                <div key={index} className="pray">
                    <p className="name">{pray.name} :</p>
                    <p className="time">{pray.time || "...loading"}</p>
                </div>
            ))}
        </div>
    );
};

export default Pray;
