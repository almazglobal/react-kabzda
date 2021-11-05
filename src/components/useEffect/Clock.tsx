import React, {useEffect, useState} from "react";
import styles from './Clock.module.css'

const convertClock = (time: number) => {
    return (time < 10) ? '0' + String(time) : String(time)
}

const getDigitalClock = (date: Date) => {

    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    return `${convertClock(hours)}:${convertClock(minutes)}:${convertClock(seconds)}`
}

const getAnalogClock = (date: Date) => {

    let seconds = date.getSeconds() * 6
    let minutes = date.getMinutes() * 6
    let hours = date.getHours() * 30

    return {
        hr: `rotateZ(${(hours) + (minutes / 12)}deg)`,
        mn: `rotateZ(${minutes}deg)`,
        sc: `rotateZ(${seconds}deg)`,
    }
}

type ClockProps = {
    isAnalog: boolean
}

export const Clock: React.FC<ClockProps> = ({isAnalog}) => {
        let time: any
        const [date, setDate] = useState(new Date())
        console.log('tick')
        useEffect(() => {
            const intervalId = setInterval(() => {
                setDate(new Date())
            }, 1000)
            return () => clearInterval(intervalId)
        }, [])

        if (isAnalog) {
            time = getAnalogClock(date)
        } else {
            time = getDigitalClock(date)
        }


        return (<>

                {
                    isAnalog ?
                        <div className={styles.clock}>
                            <div className={styles.hour}>
                                <div className={`${styles.hr} ${styles.hrTransform}`}
                                     style={{transform: `${time.hr}`}}></div>
                            </div>
                            <div className={styles.min}>
                                <div className={`${styles.mn} ${styles.mnTransform}`}
                                     style={{transform: `${time.mn}`}}></div>
                            </div>
                            <div className={styles.sec}>
                                <div className={`${styles.sc}`} style={{transform: `${time.sc}`}}></div>
                            </div>
                        </div>
                        :
                        <div className={styles.digitalClock}>
                            Time: {time}
                        </div>
                }
            </>


        )
            ;
    }
;
