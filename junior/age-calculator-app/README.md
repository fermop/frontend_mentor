# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![Sample GIF](https://github.com/fermop/frontend_mentor-assets/blob/main/junior/age-calculator-app/sample.gif?raw=true)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

📱 Mobile

![Mobile](https://github.com/fermop/frontend_mentor-assets/blob/main/junior/age-calculator-app/mobile.png?raw=true)

💻 Desktop

![Desktop](https://github.com/fermop/frontend_mentor-assets/blob/main/junior/age-calculator-app/desktop.png?raw=true)

### Links

- Solution URL: []()
- Live Site URL: []()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Tailwind v4 Theme)
    - Flexbox & CSS Grid
    - Tailwind CSS - For styling
- Mobile-first workflow
- [React](https://es.react.dev/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [date-fns](https://date-fns.org/) - For date validation and logic
- [React CountUp](https://www.npmjs.com/package/react-countup) - For number animations

### What I learned

I learned how to manage state effectively in React, specifically lifting state up from child components (`DateForm`) o parent components (`Card`) to share data across the app. I also learned about professional refactoring techniques, such as grouping related form state into objects to keep code clean and scalable.

I gained experience with modern styling using `Tailwind CSS v4`, creating custom animations directly in the CSS configuration. Additionally, I learned how to optimize fonts using `next/font/google` and implement robust date validation using `date-fns`.

Here are some code snippets I'm proud of:

#### The "Bag of Errors" Validation Strategy:

```typescript
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const newErrors: {days?: string, months?: string, years?: string, wholeForm?: string} = {};

  // Validate empty fields
  if (!formData.days) newErrors.days = "This field is required";
  
  // Validate future dates using date-fns
  if (isFuture(birthDate)) {
    newErrors.wholeForm = "Must be in the past";
  }

  // If errors exist, stop submission
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
};
```

#### Custom Tailwind v4 Animation:
```css
@theme {
  --animate-fade-in-up: fade-in-up 0.6s ease-out forwards;
  
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

### Continued development

I want to continue practicing these concepts to solidify my understanding of React state management and component communication. I also plan to dive deeper into TypeScript, specifically handling strict event types and interfaces, to write even more robust code in future projects.

### Useful resources

- [date-fns Documentation](https://date-fns.org/docs/Getting-Started) - This library helped me manage the complex date logic, especially for edge cases like leap years and month lengths.

## Author

- Frontend Mentor - [@fermop](https://www.frontendmentor.io/profile/fermop)
- Linkedin - [Fernando Pérez Mojica](www.linkedin.com/in/fernando-pérez-mojica-71b28a361)