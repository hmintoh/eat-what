export type TZones = "central" | "north" | "south" | "east" | "west";

export type TMeals = "breakfast" | "lunch" | "dinner" | "supper";

export const mealRange = {
  lateSupper: {
    start: new Date().setHours(0, 0, 0),
    end: new Date().setHours(2, 59, 59),
  },
  breakfast: {
    start: new Date().setHours(6, 0, 0),
    end: new Date().setHours(11, 59, 59),
  },
  lunch: {
    start: new Date().setHours(11, 0, 0),
    end: new Date().setHours(15, 59, 59),
  },
  dinner: {
    start: new Date().setHours(16, 0, 0),
    end: new Date().setHours(21, 29, 59),
  },
  earlySupper: {
    start: new Date().setHours(21, 30, 0),
    end: new Date().setHours(23, 59, 59),
  },
};
