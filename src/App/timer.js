import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectStartTime, selectStatus } from "./slice";

const toString = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time - hours * 60 * 60 * 1000) / (1000 * 60));
    const seconds = Math.floor((time - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000);

    return (`${hours < 10 ? "0" + hours : hours}`
        + `:${minutes < 10 ? "0" + minutes : minutes}`
        + `:${seconds < 10 ? "0" + seconds : seconds}`
    )
};

export const useTimer = () => {
    const startTime = useSelector(selectStartTime);
    const status = useSelector(selectStatus);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().getTime() - startTime);
        }, 1000)

        if (!startTime) {
            setTime(0);
            clearInterval(timerId);
        };

        if (status === "finish") {
            clearInterval(timerId);
        };

        return () => clearInterval(timerId);
    }, [startTime, status]);

    return toString(time);
};

export const useTime = () => {
    const startTime = useSelector(selectStartTime);

    if (startTime) {
        return toString(new Date().getTime() - startTime);
    };

    return toString(0);
};