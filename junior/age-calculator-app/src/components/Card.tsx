'use client';
import DateForm from '@/components/DateForm';
import ResultDisplay from '@/components/ResultDisplay';
import { useState } from 'react';

export default function Card() {
  const [days, setDays] = useState<number | null>(null);
  const [months, setMonths] = useState<number | null>(null);
  const [years, setYears] = useState<number | null>(null);

  return (
    <div className='w-full max-w-210 bg-white m-auto py-8 px-4 md:p-12 rounded-3xl rounded-br-[6.25rem] md:rounded-br-[12.5rem] animate-fade-in-up'>
        <DateForm 
          onDaysChange={setDays}
          onMonthsChange={setMonths}
          onYearsChange={setYears}
        />

        <ResultDisplay years={years} months={months} days={days} />
    </div>
  )
}