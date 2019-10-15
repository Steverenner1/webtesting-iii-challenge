// Test away
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
    it("renders close, open and lock, unlock status", () => {
        const { getByText, debug } = render(<Dashboard />);
        debug();

        getByText(/lock/i);
        getByText(/close/i);
        getByText(/open/i);
        getByText(/unlocked/i);
    });

    it("renders the display", () => {
        const { getByTestId } = render(<Dashboard />);
        const display = getByTestId("display");
        expect(display).toHaveClass("display panel");
    });

    it("renders the controls", () => {
        const { getByTestId } = render(<Dashboard />);
        const controls = getByTestId("controls");
        expect(controls).toHaveClass("controls panel");
    });

    it("renders display and controls", () => {
        const { getByTestId } = render(<Dashboard />);
        const display = getByTestId("display");
        const controls = getByTestId("controls");
        expect(display).toBeInTheDocument();
        expect(controls).toBeInTheDocument();
    });

    it("unmounts component after each test", () => {
        console.log(document.body.outerHTML);
    });
});