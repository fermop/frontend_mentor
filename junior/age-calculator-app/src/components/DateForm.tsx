import React, { useState } from 'react';
import InputField from '@/components/InputField'
import Image from 'next/image'
import { isFuture, intervalToDuration, isValid, parseISO } from 'date-fns';

interface DateFormProps {
  onDaysChange: (value: number | null) => void;
  onMonthsChange: (value: number | null) => void;
  onYearsChange: (value: number | null) => void;
}

export default function DateForm({ onDaysChange, onMonthsChange, onYearsChange }: DateFormProps) {
  const currentYear = new Date().getFullYear()

  const [formData, setFormData] = useState({ days: '', months: '', years: '' });

  const [errors, setErrors] = useState<{days?: string, months?: string, years?: string, wholeForm?: string}>({});

  const handleChange = (field: 'days' | 'months' | 'years') => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: {days?: string, months?: string, years?: string, wholeForm?: string} = {};

    // Any field is empty when the form is submitted
    if (!formData.days) {
      newErrors.days = "This field is required";
    }
    if (!formData.months) {
      newErrors.months = "This field is required";
    }
    if (!formData.years) {
      newErrors.years = "This field is required";
    }

    // The day number is not between 1-31
    const d = +formData.days;

    if (formData.days && (d < 1 || d > 31)) {
      newErrors.days = "Must be a valid day";
    }

    // The month number is not between 1-12
    const m = +formData.months;

    if (formData.months && (m < 1 || m > 12)) {
      newErrors.months = "Must be a valid month";
    }

    // The year is invalid
    const y = +formData.years;
    if (formData.years && (y < 1 || y > currentYear)) {
      newErrors.years = "Must be a valid year";
    }
    
    // The date is invalid e.g. 31/04/1991 (there are 30 days in April)
    const birthDate = new Date(y, m - 1, d);

    if (formData.years && formData.months && formData.days) {
      if (birthDate.getMonth() !== m - 1 || !isValid(birthDate)) {
        newErrors.wholeForm = "Must be a valid date";
      }
    }

    // The date is in the future
    if (isFuture(birthDate)) {
      newErrors.wholeForm = "Must be in the past";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    // No errors
    const duration = intervalToDuration({
      start: birthDate,
      end: new Date()
    });

    onYearsChange(Number(duration.years) || 0);
    onMonthsChange(Number(duration.months) || 0);
    onDaysChange(Number(duration.days) || 0);
  }

  return (
    <div>
      <form 
        className='flex flex-col'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='grid grid-cols-3 gap-4 sm:max-w-[75%]' >
          <InputField 
            inputId="dayInput" 
            label='day' 
            type='tel'
            inputMode='numeric' 
            pattern='[0-9]*'
            placeholder='DD'
            min='1'
            max='31'
            maxLength={2}
            value={formData.days}
            onChange={handleChange('days')}
            error={errors.days}
            wholeForm={errors.wholeForm}
          />
          <InputField 
            inputId="monthInput" 
            label='month' 
            type='tel'
            inputMode='numeric' 
            pattern='[0-9]*'
            placeholder='MM'
            min='1'
            max='12'
            maxLength={2}
            value={formData.months}
            onChange={handleChange('months')}
            error={errors.months}
            wholeForm={errors.wholeForm}
          />
          <InputField 
            inputId="yearInput" 
            label='year' 
            type='tel'
            inputMode='numeric' 
            pattern='[0-9]*'
            placeholder='YYYY'
            min='1'
            max={currentYear.toString()}
            maxLength={4}
            value={formData.years}
            onChange={handleChange('years')}
            error={errors.years}
            wholeForm={errors.wholeForm}
          />

          {errors && (
            <p className='text-sm italic text-primary-red-400'>{errors.wholeForm}</p>
          )}
        </div>

        <div className="relative flex items-center justify-center sm:justify-end my-4">
          <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-grey-200" />

          <button
            type='submit'
            className='z-10 bg-primary-purple-500 cursor-pointer rounded-full p-4 hover:bg-neutral-black duration-250'
          >
            <Image 
              src='/assets/images/icon-arrow.svg'
              alt='Calculate Age'
              width={44}
              height={44}
              className="w-6 h-6 md:w-11 md:h-11"
            />
          </button>
        </div>
      </form>
    </div>
  )
}
