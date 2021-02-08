import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
   test("status from props should be in the state", () => {
       const component = create(<ProfileStatus status="I'm TestDevelopeer" />);
       const instance = component.getInstance();
       expect(instance.state.status).toBe("I'm TestDevelopeer");
   });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="I'm TestDevelopeer" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="I'm TestDevelopeer" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("I'm TestDevelopeer");
    });

    test("after creation input should be hidden", () => {
        const component = create(<ProfileStatus status="I'm TestDevelopeer" />);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="I'm TestDevelopeer" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("I'm TestDevelopeer");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="I'm TestDevelopeer" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});