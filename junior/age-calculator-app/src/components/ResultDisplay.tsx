'use client';
import CountUp from 'react-countup';

interface ResultDisplayProps {
  days: number | null;
  months: number | null;
  years: number | null;
}

export default function ResultDisplay({ days, months, years }: ResultDisplayProps) {
  const renderValue = (value: number | null) => {
    if (value === null) return <span>--</span>;

    return (
      <CountUp
        start={0}
        end={value}
        duration={4}
        separator=""
        formattingFn={(val) => val < 10 ? `0${val}` : `${val}`}
      />
    );
  };

  return (
    <div className='flex flex-col gap-2'>
      <p className='font-extrabold text-5xl sm:text-6xl italic md:text-8xl'>
        <span className='text-primary-purple-500'>
          {renderValue(years)}
        </span> years
      </p>

      <p className='font-extrabold text-5xl sm:text-6xl italic md:text-8xl'>
        <span className='text-primary-purple-500'>
          {renderValue(months)}
        </span> months
      </p>

      <p className='font-extrabold text-5xl sm:text-6xl italic md:text-8xl'>
        <span className='text-primary-purple-500'>
          {renderValue(days)}
        </span> days
      </p>
    </div>
  )
}