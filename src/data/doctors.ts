export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  schedule: string;
  photoUrl: string;
  slug: string;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Lincoln Alam",
    qualification: "MBBS, MS",
    specialization: "Orthopedic Surgeon",
    schedule: "Visits every Saturday, from 11:00 AM",
    photoUrl: "/doctor_1.png",
    slug: "dr-lincoln-alam",
  },
  {
    id: "2",
    name: "Dr. Ujjal Roy",
    qualification: "MBBS, MS",
    specialization: "General Surgeon",
    schedule: "Visits every Sunday, from 2:00 PM",
    photoUrl: "/doctor_2.png",
    slug: "dr-ujjal-roy",
  },
  {
    id: "3",
    name: "Dr. Akhilesh Kumar Verma",
    qualification: "MD",
    specialization: "Radiology",
    schedule: "USG & Anomaly Scan on Mon, Tue, Wed, Fri & Sun",
    photoUrl: "/doctor_3.png",
    slug: "dr-akhilesh-kumar-verma",
  },
];
