import React from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./App.css";

function App() {
  document.title = "Credit Card Calculator";
  const form = useForm({
    initialValues: {
      cardType: "",
      cardBalance: 0,
      cardAPR: 0,
      cardMonthlyRepayment: 0,
      termsOfService: false,
    },

    validate: {
      cardType: (value) =>
        typeof value === "string" ? null : "Invalid Card Type",
      cardBalance: (value) =>
        typeof value === "string" ? null : "Please enter a valid number",
      cardAPR: (value) =>
        typeof value === "string" ? null : "Please enter a valid number",
      cardMonthlyRepayment: (value) =>
        typeof value === "string" ? null : "Please enter a valid number",
    },
  });

  function WelcomeMessage() {
    return (
      <p>
        Credit cards are like having a loan for the amount you’ve spent using
        the card. They’re easy to carry, offer a way to buy-now-pay-later, and
        give you buyer’s protection. It’s easy to get stung with a credit card
        though, and that’s where our credit card calculator comes in. Interest
        rates can be high and a missing a payment can mean debts start to
        increase. Our calculator will let you see how much a credit card will
        cost you or how quickly you can pay off your existing cards. You can add
        multiple cards, and as part of the result you can alter the repayment
        amount to see how that affects the length of time you’ll be paying, and
        how much extra you’ll spend in interest.
      </p>
    );
  }

  return (
    <div className="App">
      <h1>Credit Card Calculator App!</h1>
      {WelcomeMessage}

      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            label="What is the card for?"
            placeholder="e.g. Store Card, Bank Card"
            {...form.getInputProps("cardType")}
          />

          <TextInput
            required
            label="What is the card's balance?"
            placeholder="e.g. £300"
            {...form.getInputProps("cardBalance")}
          />

          <TextInput
            required
            label="What is the APR on the card?"
            placeholder="e.g. 4%"
            {...form.getInputProps("cardAPR")}
          />

          <TextInput
            required
            label="What is the monthly repayment on this card?"
            placeholder="e.g. £25"
            {...form.getInputProps("cardMonthlyRepayment")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Add Card</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}

export default App;
