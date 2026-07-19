import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui/Card";
import { Select } from "../components/ui/Select";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import { ArrowBigRightIcon } from "lucide-react";

const goalOptions = [
  { value: "muscle", label: "Build Muscle" },
  { value: "lose_weight", label: "Lose Weight" },
  { value: "endurance", label: "Improve Endurance" },
  { value: "health", label: "Improve Overall Health" },
  { value: "strength", label: "Become Stronger" },
];

const levelOptions = [
  { value: "beginner", label: "Beginner - just getting started" },
  { value: "intermediate", label: "Intermediate - I've been working out consistently" },
  { value: "Advanced", label: "Advanced - I train consistently" },
];

const daysPerWeekOptions = [
  { value: "2", label: "2 days per week" },
  { value: "3", label: "3 days per week" },
  { value: "4", label: "4 days per week" },
  { value: "5", label: "5 days per week" },
];

const durationOptions = [
  { value: "20", label: "20 minutes or less" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
  { value: "90", label: "90 minutes" },
];

const splitOptions = [
  { value: "full_body", label: "Full Body" },
  { value: "upper_lower", label: "Upper / Lower Split" },
  { value: "pps", label: "Push Pull Split" },
  { value: "ai-choose", label: "You decide" },
];

type OnboardingFormData = {
  goal: string;
  level: string;
  days: string;
  duration: string;
  split: string;
  notes: string;
};

export default function Onboarding() {
  const { user } = useAuth();

  const [formData, setFormData] = useState<OnboardingFormData>({
    goal: "muscle",
    level: "beginner",
    days: "2",
    duration: "20",
    split: "full_body",
    notes: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-6">
        <Card className="max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Tell us about yourself and your goals</h1>
          <p className="text-[var](--color-muted) mb-6">
            Help us create the perfect plan for you
          </p>
          <form className="flex flex-col gap-4">
            <Select
              id="goal"
              label="What's your primary goal?"
              options={goalOptions}
              value={formData.goal}
              onChange={(e) => updateForm("goal", e.target.value)}
            />
            <Select
              id="level"
              label="What's your level of exercise experience?"
              options={levelOptions}
              value={formData.level}
              onChange={(e) => updateForm("level", e.target.value)}
            />
            <Select
              id="days"
              label="How many days per week can you train?"
              options={daysPerWeekOptions}
              value={formData.days}
              onChange={(e) => updateForm("days", e.target.value)}
            />
            <Select
              id="duration"
              label="How long would you like each workout to be?"
              options={durationOptions}
              value={formData.duration}
              onChange={(e) => updateForm("duration", e.target.value)}
            />
            <Select
              id="split"
              label="What's your preferred workout split?"
              options={splitOptions}
              value={formData.split}
              onChange={(e) => updateForm("split", e.target.value)}
            />
            <Textarea
              id="notes"
              label="Any additional notes or preferences?"
              value={formData.notes}
              onChange={(e) => updateForm("notes", e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="w-ful">
                Gernerate My Plan
                <ArrowBigRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </SignedIn>
  );
}

