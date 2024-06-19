import { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    const minutes = Math.floor((time / 60000) % 60);
    const getMinutes = `0${minutes}`.slice(-2);
    const hours = Math.floor((time / 3600000) % 24);
    const getHours = `0${hours}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <div className="text-6xl font-mono mb-8">
        {formatTime(time)}
      </div>
      <div className="space-x-4">
        <button
          onClick={handleStartStop}
          className={`px-4 py-2 rounded ${isRunning ? 'bg-red-600' : 'bg-green-600'} hover:bg-opacity-75`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-yellow-600 rounded hover:bg-opacity-75"
        >
          Reset
        </button>
        <button
          onClick={handleLap}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-opacity-75"
        >
          Lap
        </button>
      </div>
      <div className="mt-8 text-left">
        {laps.map((lap, index) => (
          <div key={index} className="flex justify-between border-b border-gray-700 py-1">
            <span>Lap {index + 1}</span>
            <span>{formatTime(lap)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
