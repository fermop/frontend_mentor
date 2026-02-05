import React from 'react'

interface InputFieldProps {
  inputId: string;
  label: string;
  type?: string;
  inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal";
  pattern: string;
  placeholder: string;
  min?: string;
  max?: string;
  maxLength: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  wholeForm?: string | null;
}

export default function InputField({
  inputId,
  label,
  type = "text",
  inputMode,
  pattern,
  placeholder,
  min,
  max,
  maxLength,
  value,
  onChange,
  error,
  wholeForm
}: InputFieldProps) {
  // Unique ID for the error message
  const errorId = `${inputId}-error`;

  return (
    <div className='grid gap-2'>
      <label 
        className={`uppercase font-bold text-xs tracking-widest cursor-pointer ${error || wholeForm ? 'text-primary-red-400' : 'text-neutral-grey-500'}`}
        htmlFor={inputId}
      >
        {label}
      </label>
      
      <input
        className={`
          w-full p-2 sm:px-4 border font-bold rounded-md text-base sm:text-input-size focus:outline-none focus:ring-1 no-arrows
          ${error || wholeForm
            ? 'border-primary-red-400 focus:border-primary-red-400 focus:ring-primary-red-400' 
            : 'border-neutral-grey-200 focus:border-primary-purple-500 focus:ring-primary-purple-500'
          }
        `}
        id={inputId}
        type={type}
        inputMode={inputMode}
        pattern={pattern}
        placeholder={placeholder}
        min={min}
        max={max}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p id={errorId} className='text-xs sm:text-sm italic text-primary-red-400'>{error}</p>
      )}
    </div>
  )
}