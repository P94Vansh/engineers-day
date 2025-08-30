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
    const [feesPrice, setFeesPrice] = useState('')
    const [formData, setFormData] = useState({ transition_amount: 0 });
    const [isCollegeUIT, setIsCollegeUIT] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault();
        setInfoTheme("suggest");
        setInfoText("Uploading Form ...");
        setSubmitDisabled(true);
        console.log({ formData });
        try {
            const response = await fetch("/api/send-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData }),
            });
            if (response.ok) {
                let data = await response.json();
                console.log(data)
                let { success } = data;
                console.log(success)
                if (success) {
                    setInfoTheme("success");
                    setInfoText(`Form Submitted Successfully...
              Our Team will contact you Shortly through the provided Mail... Please keep Checking the spam folder of provided email as well.. If you don't receive mail within one day.. kindly contact us..`);
                }
                else {
                    setInfoTheme("error");
                    setInfoText(data.message + " -- Contact US with Error");

                }

            }
            else {
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
        console.log(name)
        // Update transition_amount dynamically based on the selected event
        if (name === "event") {
            // const selectedEvent = fees.find((fee) => Object.keys(fee)[0] === value);
            // const eventFee = selectedEvent ? Object.values(selectedEvent)[0] : 0;
            setFormData({ ...formData, [name]: value, teamSize: undefined, transition_amount: 0, eventSpectrum: undefined, eventVartalap: undefined });
            setFeesPrice("Please Select the teamSize first")
            const eventInd = events.findIndex((event) => event === value)
            if (value !== "Spectrum" && value !== "Vartalap") setTeamSize(teamMembersAllowed[eventInd])
            setTeamMemberNumber(0)
        }
        else if (name === "eventSpectrum") {
            setFormData({ ...formData, [name]: value, teamSize: undefined });
            setTeamSize(teamMembersAllowed[15][value])
        }
        else if (name === "eventVartalap") {
            setFormData({ ...formData, [name]: value, teamSize: undefined })
            setTeamSize(teamMembersAllowed[18][value])
        }
        else if (name === "teamSize") {
            if (value === "Solo") {
                setTeamMemberNumber(0)
            } else if (value === "Duet") {
                setTeamMemberNumber(1)
            } else if (value === "Trio") {
                setTeamMemberNumber(2)
            } else if (value === "Quartet" || value === "Group") {
                setTeamMemberNumber(3)
            } else if (value === "Quintet") {
                setTeamMemberNumber(4)
            } else if (value === "Septet") {
                setTeamMemberNumber(6)
            } else {
                setTeamMemberNumber(0)
            }
            let fees
            if (!formData["college"]) fees = 'Please selece the college First'
            else if (!formData["event"]) fees = 'Please select the event First'
            else {
                const eventIdx = events.findIndex((value) => value === formData["event"])
                if (formData["event"] !== "Spectrum" && formData["event"] !== "Vartalap") {
                    const teamSizeIdx = teamMembersAllowed[eventIdx].findIndex((val) => val === value)
                    if (formData["college"] === "UIT") {
                        fees = feesUit[eventIdx][teamSizeIdx]
                    } else {
                        fees = feesUit[eventIdx][teamSizeIdx]
                    }
                }
                else {
                    if (formData["event"] === "Spectrum") {
                        if (!formData["eventSpectrum"]) {
                            fees = "Please Select Sub Event First"
                        }
                        else {
                            const teamSizeIdx = teamMembersAllowed[eventIdx][formData["eventSpectrum"]].findIndex((val) => val === value)
                            if (formData["college"] === "UIT") {
                                fees = feesUit[eventIdx][formData["eventSpectrum"]][teamSizeIdx]
                            } else {
                                fees = feesAll[eventIdx][formData["eventSpectrum"]][teamSizeIdx]
                            }
                        }
                    }
                    else if (formData["event"] === "Vartalap") {
                        if (!formData["eventVartalap"]) {
                            fees = "Please Select Sub Event First"
                        }
                        else {
                            const teamSizeIdx = teamMembersAllowed[eventIdx][formData["eventVartalap"]].findIndex((val) => val === value)
                            if (formData["college"] === "UIT") {
                                fees = feesUit[eventIdx][formData["eventVartalap"]][teamSizeIdx]
                            } else {
                                fees = feesAll[eventIdx][formData["eventVartalap"]][teamSizeIdx]
                            }
                        }
                    }
                }
            }
            setFeesPrice(fees)
            setFormData({ ...formData, [name]: value, transition_amount: fees })
        }
        else if (name === "college") {

            if (value === "Other") {
                setIsCollegeUIT(true)
            } else {
                setIsCollegeUIT(false)
            }
            let fees
            if (!formData["event"]) fees = 'Please select the event First'
            else if (!formData["teamSize"]) fees = 'Please selece the team size First'
            else {
                const eventIdx = events.findIndex((value) => value === formData["event"])
                if (formData["event"] !== "Spectrum" && formData["event"] !== "Vartalap") {
                    const teamSizeIdx = teamMembersAllowed[eventIdx].findIndex((val) => val === formData["teamSize"])
                    if (value === "UIT") {
                        fees = feesUit[eventIdx][teamSizeIdx]
                    } else {
                        fees = feesAll[eventIdx][teamSizeIdx]
                    }
                }
                else {
                    if (formData["event"] === "Spectrum") {
                        if (!formData["eventSpectrum"]) {
                            fees = "Please Select Sub Event First"
                        }
                        else {
                            const teamSizeIdx = teamMembersAllowed[eventIdx][formData["eventSpectrum"]].findIndex((val) => val === formData["teamSize"])
                            if (value === "UIT") {
                                fees = feesUit[eventIdx][formData["eventSpectrum"]][teamSizeIdx]
                            } else {
                                fees = feesAll[eventIdx][formData["eventSpectrum"]][teamSizeIdx]
                            }
                        }
                    }
                    else if (formData["event"] === "Vartalap") {
                        if (!formData["eventVartalap"]) {
                            fees = "Please Select Sub Event First"
                        }
                        else {
                            const teamSizeIdx = teamMembersAllowed[eventIdx][formData["eventVartalap"]].findIndex((val) => val === formData["teamSize"])
                            if (value === "UIT") {
                                fees = feesUit[eventIdx][formData["eventVartalap"]][teamSizeIdx]
                            } else {
                                fees = feesAll[eventIdx][formData["eventVartalap"]][teamSizeIdx]
                            }
                        }
                    }
                }
            }
            setFeesPrice(fees)
            setFormData({ ...formData, [name]: value, transition_amount: fees })
        }
        else {
            setFormData({ ...formData, [name]: value });
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
                        {
                            formData["event"] === "Spectrum" && (
                                <Select
                                    options={eventSpectrum}
                                    label={"Select Sub event"}
                                    name={'eventSpectrum'}
                                    onChange={handleInput}
                                    value={formData["eventSpectrum"]}
                                    className="flex-1"
                                    required
                                />
                            )
                        }
                        {
                            formData["event"] === "Vartalap" && (
                                <Select
                                    options={eventVartalap}
                                    label={"Select Sub event"}
                                    name={'eventVartalap'}
                                    onChange={handleInput}
                                    value={formData["eventVartalap"]}
                                    className="flex-1"
                                    required
                                />
                            )
                        }
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-5">
                        {!formData["event"] || (formData["event"] === "Spectrum" && !formData["eventSpectrum"]) && (
                            <div className="flex-1 flex-shrink mb-2">
                                <div className="text-white mb-2">Number of Team Members</div>
                                <div className="text-gray-300 flex-1 h-[40px] border flex items-center justify-center border-[#444] rounded text-center">Choose SubEvent First</div>
                            </div>
                        )}
                        {!formData["event"] || (formData["event"] === "Vartalap" && !formData["eventVartalap"]) && (
                            <div className="flex-1 flex-shrink mb-2">
                                <div className="text-white mb-2">Number of Team Members</div>
                                <div className="text-gray-300 flex-1 h-[40px] border flex items-center justify-center border-[#444] rounded text-center">Choose SubEvent First</div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-5">
                        {formData["event"] && (formData["event"] !== "Spectrum" && formData["event"] !== "Vartalap") && (
                            <Select
                                options={teamSize}
                                label={"Select Team Size"}
                                name={"teamSize"}
                                onChange={handleInput}
                                value={formData["teamSize"]}
                                className="flex-1"
                                required
                            />
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-5">
                        {formData["event"] && formData["event"] === "Spectrum" && formData["eventSpectrum"] && (
                            <Select
                                options={teamSize}
                                label={"Select Team Size"}
                                name={"teamSize"}
                                onChange={handleInput}
                                value={formData["teamSize"]}
                                className="flex-1"
                                required
                            />
                        )}
                        {formData["event"] && formData["event"] === "Vartalap" && formData["eventVartalap"] && (
                            <Select
                                options={teamSize}
                                label={"Select Team Size"}
                                name={"teamSize"}
                                onChange={handleInput}
                                value={formData["teamSize"]}
                                className="flex-1"
                                required
                            />
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
                                {feesPrice
                                    ? feesPrice || "Event not found"
                                    : "Choose an Event first"}
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                    {/* Payment screenshot */}
                    <div className="flex flex-col mt-2">
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
                            <Input
                                className={"mt-3"}
                                label={"UPI ID"}
                                name={"upi_id"}
                                value={formData["upi_id"]}
                                onChange={handleInput}
                                required
                            />
                        </>
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
    "Vartalap",
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
    ["Duet", "Quartet"],
    ["Solo"],
    ["Trio", "Quartet", "Quintet"],
    ["Septet"],
    ["Solo"],
    ["Duet", "Quartet"],
    ["Solo", "Duet"],
    ["Duet", "Quartet"],
    ["Duet", "Quintet"],
    { "Dance": ["Solo", "Duet"], "Singing": ["Solo", "Duet"], "Modelling": ["Solo", "Duet"], "CosPlay": ["Solo"] },
    ["Solo", "Duet", "Quartet"],
    ["Solo", "Duet", "Quartet"],
    { "Group Discussion": ["Solo"], "Debate": ["Solo", "Duet", "Trio", "Quartet"] },
    ["Solo", "Duet"],
    ["Trio", "Quartet"],
    ["Solo"]
]
const feesAll = [
    [100, 150],
    [50, 80],
    [80, 150],
    [80, 150],
    [80, 150],
    [50, 80, 100, 150],
    [80, 150],
    [50],
    [100, 150, 200],
    [300],
    [50],
    [80, 150],
    [50, 80],
    [80, 150],
    [80, 200],
    {
        Dance: [50, 80],
        Singing: [50, 80],
        Modelling: [50, 80],
        CosPlay: [50]
    },
    [50, 80, 150],
    [50, 80, 150],
    {
        "Group Discussion": [50],
        Debate: [50, 80, 100, 150]
    },
    [50, 80],
    [100, 150],
    [50]
];

const eventSpectrum = [
    "Dance",
    "Singing",
    "Modelling",
    "CosPlay"
]
const eventVartalap = [
    "Group Discussion",
    "Debate"
]
const feesUit = [
    [80, 130],
    [40, 70],
    [70, 130],
    [70, 130],
    [70, 130],
    [40, 70, 80, 130],
    [70, 130],
    [40],
    [80, 130, 180],
    [280],
    [40],
    [70, 130],
    [40, 70],
    [70, 130],
    [70, 180],
    {
        Dance: [40, 70],
        Singing: [40, 70],
        Modelling: [40, 70],
        CosPlay: [40]
    },
    [40, 70, 130],
    [40, 70, 130],
    {
        "Group Discussion": [40],
        Debate: [40, 70, 80, 130]
    },
    [40, 70],
    [80, 130],
    [40]
];
