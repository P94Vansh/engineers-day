"use client";

import { useCallback, useEffect, useState } from "react";
import Input from "../../components/input";
import Select from "../../components/select";
import Info from "../../components/infobox";
export default function Register() {
    const [infoTheme, setInfoTheme] = useState("suggest");
    const [infoText, setInfoText] = useState(" * fields are required");
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [teamSize, setTeamSize] = useState([])
    const [teamMemberNumber, setTeamMemberNumber] = useState(0)

    const [formData, setFormData] = useState({ transition_amount: 0 });
    const [isCollegeUIT, setIsCollegeUIT] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault();
        setInfoTheme("suggest");
        setInfoText("Uploading Form ...");
        setSubmitDisabled(true);
        console.log({ formData });
        try {
            const response = await fetch("/api/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, year: parseInt(formData.year) }),
            });

            if (response.ok) {
                let data = await response.json();
                let { type } = data;
                switch (type) {
                    case "success":
                        setInfoTheme("success");
                        setInfoText(`Form Submitted Successfully...
              Our Team will contact you Shortly through the provided Mail... Please keep Checking the spam folder of provided email as well.. If you don't receive mail within one day.. kindly contact us..`);
                        break;
                    case "error":
                        setInfoTheme("error");
                        setInfoText(data.message + " -- Contact US with Error");
                        break;
                }

            } else {
                console.error("Failed to submit form");
                setInfoTheme("error");
                setInfoText("Error submitting form - Contact us from bottom of page");
                // Handle the error (e.g., show an error message)
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setInfoTheme("error");
            setInfoText("Error submitting form");
            // Handle the error (e.g., show an error message)
        }

        setSubmitDisabled(false);
    };

    const handleInput = (e) => {
        let { name, value } = e.target;

        // Update transition_amount dynamically based on the selected event
        if (name === "event") {
            // const selectedEvent = fees.find((fee) => Object.keys(fee)[0] === value);
            // const eventFee = selectedEvent ? Object.values(selectedEvent)[0] : 0;
            setFormData({ ...formData, [name]: value });
            const eventInd = events.findIndex((event) => event === value)
            setTeamSize(teamMembersAllowed[eventInd])
        }
        else if (name === "teamSize") {
            setFormData({ ...formData,[name]:value})
            if (value === "Solo") {
                setTeamMemberNumber(0)
            } else if (value === "Duet") {
                setTeamMemberNumber(1)
            } else if (value === "Trio") {
                setTeamMemberNumber(2)
            } else if (value === "Quartet") {
                setTeamMemberNumber(3)
            } else if (value === "Quintet") {
                setTeamMemberNumber(4)
            } else if (value === "Septet") {
                setTeamMemberNumber(6)
            } else {
                setTeamMemberNumber(0)
            }
        }
        else {
            setFormData({ ...formData, [name]: value });
            if (name === "college") {
                if (value === "Other") {
                    setIsCollegeUIT(true)
                } else {
                    setIsCollegeUIT(false)
                }
            }
        }
        if(name==="event" || name==="college" || name==="teamSize"){
            setFormData({ ...formData, [name]: value });
            if(formData["event"] && formData["college"] && formData["teamSize"]){
                const eventIdx = events.findIndex((val) => val === formData["event"])
                console.log(eventIdx)
                for (let i = 0; i < teamMembersAllowed[eventIdx].length; i++) {
                    if (teamMembersAllowed[eventIdx][i] === formData["teamSize"]) {
                        console.log(i)
                        if (formData["college"] === "UIT") {
                            setFormData({ ...formData, transition_amount: feesUit[eventIdx][i] })
                        }
                        else{
                            setFormData({ ...formData, transition_amount: feesAll[eventIdx][i] })
                        }
                        break
                    }
                }
            }
        }
    };

    return (
        <>
            <div className="h-8"></div>
            <div className="w-full grid-bg text-white py-10">
                <form
                    onSubmit={onSubmit}
                    className="bg-blur w-[95%] mx-auto md:w-[600px] flex flex-col bg-[rgba(255,255,255,0.1)] px-5 lg:px-10 rounded-3xl border border-gray-500"
                >
                    <h1 className="text-center text-2xl md:4xl py-10">
                        <span className="text-gray-400">Registration Form</span>
                    </h1>
                    {/* Team Name - Leader */}
                    <div className="flex flex-col md:flex-row gap-x-5">
                        <Input
                            label={"Team Leader's First Name"}
                            name={"firstname"}
                            onChange={handleInput}
                            value={formData["firstname"]}
                            className={"flex-1"}
                            required
                        />
                        <Input
                            required
                            label={"Team Leader's Last Name"}
                            name={"lastname"}
                            className={"flex-1"}
                            onChange={handleInput}
                            value={formData["lastname"]}
                        />
                    </div>
                    {/* Player 2 - player 3 */}

                    {/* Year - Semester */}
                    <div className="flex flex-col md:flex-row gap-x-5">
                        <Select
                            options={["1st", "2nd", "3rd", "4th", "5th"]}
                            label={"Team Leader's Year"}
                            name={"year"}
                            onChange={handleInput}
                            value={formData["year"]}
                            className="flex-1"
                            required
                        />
                        <Select
                            options={Array.from({ length: 10 }).map((e, i) => i + 1)}
                            label={"Team Leader's Semester"}
                            name={"semester"}
                            onChange={handleInput}
                            value={formData["semester"]}
                            className="flex-1"
                            required
                        />
                    </div>
                    {/* Gender - Email */}
                    <div className="flex flex-col md:flex-row gap-x-5">
                        <Select
                            label={"Team Leader's Gender"}
                            name={"gender"}
                            options={["Male", "Female", "Other"]}
                            className={"flex-1"}
                            onChange={handleInput}
                            value={formData["gender"]}
                            required
                        />
                        <Select
                            label={"College Name"}
                            name={"college"}
                            options={["UIT", "Other"]}
                            className={"flex-1"}
                            onChange={handleInput}
                            value={formData["college"]}
                            required
                        />

                    </div>
                    {isCollegeUIT && (

                        <div className="flex flex-col md:flex-row gap-x-5">
                            <Input
                                label={"Enter College Name"}
                                name={"otherCollege"}
                                className={"flex-1"}
                                type="text"
                                onChange={handleInput}
                                value={formData["otherCollege"]}
                                required
                            />
                        </div>
                    )}
                    {/* Phone - email */}
                    <div className="flex flex-col md:flex-row gap-x-5">
                        <Input
                            label={"Email of Team Leader"}
                            name={"email"}
                            className={"flex-1"}
                            type="email"
                            onChange={handleInput}
                            value={formData["email"]}
                            required
                        />
                        <Input
                            className={"flex-1"}
                            type="number"
                            label={"Phone of Team Leader"}
                            value={formData["phone"]}
                            onChange={handleInput}
                            name="phone"
                            required
                        />
                    </div>


                    {/* Event selectoin */}
                    <div className="flex flex-col md:flex-row gap-x-5">
                        <Select
                            options={events}
                            label={"Select an Event"}
                            name={"event"}
                            onChange={handleInput}
                            value={formData["event"]}
                            className="flex-1"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-5">
                        {formData["event"] ? (
                            <Select
                                options={teamSize}
                                label={"Select Team Size"}
                                name={"teamSize"}
                                onChange={handleInput}
                                value={formData["teamSize"]}
                                className="flex-1"
                                required
                            />
                        ) : (
                            <>
                                <div className="flex-1 flex-shrink mb-2">
                                    <div className="text-white mb-2">Number of Team Members</div>
                                    <div className="text-gray-300 flex-1 h-[40px] border flex items-center justify-center border-[#444] rounded text-center">Choose an Event first</div>
                                </div>
                            </>
                        )}
                    </div>
                    {formData["teamSize"] && (
                        <>
                            {
                                formData["event"] === "Vijay Ghosh" && (
                                    <Input
                                        label={`1. Team Member Game ID`}
                                        name={`teamMemberGameId1`}
                                        onChange={handleInput}
                                        value={formData[`teamMemberGameId1`]}
                                        className={"flex-1"}
                                        required
                                    />
                                )
                            }
                            {Array.from({ length: teamMemberNumber }).map((d, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-x-5">
                                    <Input
                                        label={`${i + 2}. Team Member Name`}
                                        name={`teamMember${i + 2}`}
                                        onChange={handleInput}
                                        value={formData[`teamMember${i + 2}`]}
                                        className={"flex-1"}
                                        required
                                    />
                                    {
                                        formData["event"] === "Vijay Ghosh" && (
                                            <Input
                                                label={`${i + 2}. Team Member Game ID`}
                                                name={`teamMemberGameId${i + 2}`}
                                                onChange={handleInput}
                                                value={formData[`teamMemberGameId${i + 2}`]}
                                                className={"flex-1"}
                                                required
                                            />
                                        )
                                    }
                                </div>
                            ))}
                        </>
                    )}
                    {/* Price - ScreenShot */}
                    <div className="flex flex-col md:flex-row gap-x-5">
                        <div className="flex-1 flex-shrink mb-2">
                            <div className="text-white mb-2">Charges</div>
                            <div className="text-gray-300 flex-1 h-[40px] border flex items-center justify-center border-[#444] rounded text-center">
                                {formData["event"]
                                    ? formData["transition_amount"] || "Event not found"
                                    : "Choose an Event first"}
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div>


                    {/* Payment screenshot */}
                    <div className="flex flex-col mt-2">
                        {formData["event"] && (
                            <>
                                <div className="mb-2">Scan this QR and Submit the transaction Id</div>
                                <img
                                    src="/payment-qr.jpg"
                                    className="w-full md:w-[50%] mx-auto rounded"
                                />
                                <Input
                                    className={"mt-3"}
                                    label={"Transaction ID"}
                                    name={"transaction_id"}
                                    value={formData["transaction_id"]}
                                    onChange={handleInput}
                                    required
                                />
                            </>
                        )}
                    </div>

                    <Info
                        theme={infoTheme}
                        onClose={() => setInfoTheme("none")}
                        text={infoText}
                    />

                    {/* SUbmit button */}
                    <div className="my-4 flex">
                        <button disabled={submitDisabled} className="hover:bg-[#223] px-10 py-3 border-gray-700 border bg-[#00000088] text-white rounded-lg flex-1 md:flex-none  focus:outline-none focus:ring-[3px] focus:ring-blue-600 focus:border-transparent active:scale-90 transition-none ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}
const events = [
    "CodeStorm",
    "Colour Splash",
    "Cook Without Fire",
    "Dronovation",
    "Enginova",
    "Extempore Debate",
    "Group Discussion",
    "Hydrophilia",
    "IGNITION WAR",
    "Jagga Jasoos",
    "Kabaddi Championship",
    "Kalakriti",
    "Mech War",
    "Metal Fogging",
    "Nal Neel",
    "Sci Life",
    "Spectrum",
    "SnapShot",
    "UIT Castle",
    "Vidya Vrith",
    "Vijay Ghosh",
    "Vocal Vogue"
]
const teamMembersAllowed = [
    ["Trio", "Quartet"],
    ["Solo", "Duet"],
    ["Duet", "Quartet"],
    ["Duet", "Quartet"],
    ["Duet", "Quartet"],
    ["Solo", "Duet", "Trio", "Quartet"],
    ["Solo"],
    ["Duet", "Quartet"],
    ["Solo"],
    ["Trio", "Quartet", "Quintet"],
    ["Septet"],
    ["Solo"],
    ["Duet", "Quartet"],
    ["Solo", "Duet"],
    ["Duet", "Quartet"],
    ["Duet", "Quintet"],
    ["Solo", "Duet", "Quartet"],
    ["Solo", "Duet", "Quartet"],
    ["Solo", "Duet", "Quartet"],
    ["Solo", "Duet"],
    ["Trio", "Quartet"],
    ["Solo"]
]
const feesAll = [
    [500, 500],
    [50, 100],
    [70, 100],
    [200, 200],
    [100, 200],
    [150, 200],
    [100, 150],
    [500],
    [200],
    [100],
    [1500],
    [70, 100],
    [150, 200],
    [200],
    [500],
    [250],
    [{ "Dance": 150, "Singing": 150, "Modelling": 100, "Cosplay": 100 }, { "Dance": 400, "Singing": 200 }],
    [80, 100],
    [80, 150],
    [80, 150],
    [200, 200],
    [150]

]
const feesUit = [
    [20, 10],
    [10, 20],
    [10, 30],
    [30, 10],
    [10, 20],
    [20, 30],
    [40, 50],
    [60],
    [59],
    [48],
    [10],
    [90, 12],
    [12, 23],
    [23],
    [43],
    [54],
    [{ "Dance": 13, "Singing": 13, "Modelling": 13, "Cosplay": 21 }, { "Dance": 1, "Singing": 1 }],
    [12, 13],
    [12, 23],
    [80, 15],
    [50, 10],
    [23]
]