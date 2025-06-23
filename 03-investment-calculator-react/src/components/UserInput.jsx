export default function UserInput({ onChange, userInput }) {
  const inputs = [
    { id: "initialInvestment", label: "Initial Investment" },
    { id: "annualInvestment", label: "Annual Investment" },
    { id: "expectedReturn", label: "Expected Return" },
    { id: "duration", label: "Duration (years)" },
  ];

  return (
    <section id="user-input">
      <div className="input-group">
        {inputs.map(({ id, label }) => (
          <p key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type="number"
              id={id}
              required
              value={userInput[id]}
              onChange={onChange}
            />
          </p>
        ))}
      </div>
    </section>
  );
}
