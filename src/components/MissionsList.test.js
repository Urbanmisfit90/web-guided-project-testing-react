import { render, screen } from "@testing-library/react";
import MissionsList from "./MissionsList";
import React from 'react'

const missions = [
    {
        mission_name: "Thaicom",
        mission_id: "9D1B7E0"
    },
    {
        mission_name: "Telstar",
        mission_id: "F483DE"
    },
];

test('missions list shows data when rendered with new missions data', () => {
    const { rerender } = render(<MissionsList errors="" missions={[]}/>)
    let missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(0);

    rerender(<MissionsList errors="" missions={missions}/>);
    missionsObjects = screen.queryAllByTestId('mission');
    expect(missionsObjects).toHaveLength(2)
})