import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.organization.createMany({
    data: [
      {
        name: "The Immigrant Learning Center",
        serviceType: ["EDUCATION"],
        extraFilters: ["PARKING_AVAILABLE", "MBTA_ACCESSIBLE"],
        website: "https://www.ilctr.org/about/our-programs/",
        description:
          "English and citizenship courses. Programs teach skills such as English language, citizenship preparation, computer basics, and navigating the US education system.",
        address: "442 Main Street, Malden, MA 02148",
        coordinates: "42.427132,-71.067299",
        hours: "9am - 4pm Tuesday - Friday",
        phoneNumber: "781-322-9777",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Immigrant Family Services Institute",
        serviceType: ["EDUCATION", "LEGAL", "HOUSING", "HEALTHCARE"],
        extraFilters: [],
        website: "https://www.ifsi-usa.org/whatwedo#services",
        description:
          "Legal aid, housing assistance, TPS/work permit applications, and pathways to citizenship.",
        address: "1626 Blue Hill Avenue, Mattapan, MA 02126",
        coordinates: "42.268570,-71.093628",
        hours: "9am - 5pm Monday - Friday, 10am - 5pm Saturday, Closed Sunday",
        phoneNumber: "617-322-1348",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Rian Immigrant Center",
        serviceType: ["EDUCATION", "LEGAL"],
        extraFilters: [],
        website: "https://www.riancenter.org/what/",
        description:
          "ESL classes, citizenship education, career and education coaching, computer literacy classes",
        address: "One State Street, Boston, MA 02109",
        coordinates: "42.359619,-71.051804",
        hours: "9am - 4pm weekdays",
        phoneNumber: "612-542-7654",
        servicesOfferedLanguages: "English",
      },
      {
        name: "International Institute of New England",
        serviceType: ["EMPLOYMENT", "EDUCATION", "LEGAL", "HOUSING"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://iine.org/",
        description:
          "Humanitarian relief, English language learning, employment, skills training, and immigration legal services for refugees, including resettlement and youth programming.",
        address: "2 Boylston Street, 3rd Floor Boston, MA 02116",
        coordinates: "42.352291,-71.069199",
        hours: "9am - 5pm",
        phoneNumber: "617-695-9990",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Action for Boston Community Development",
        serviceType: [
          "EDUCATION",
          "EMPLOYMENT",
          "FOOD",
          "HEALTHCARE",
          "HOUSING",
          "LEGAL",
        ],
        extraFilters: [],
        website: "https://bostonabcd.org/allprograms/",
        description:
          "Citizenship application screening, help completing applications and fee waivers, citizenship interview preparation, green card renewal, and income-eligible legal services.",
        address: "178 Tremont St, Boston, MA 02111",
        coordinates: "42.352921,-71.064056",
        hours: "M, Tues 9am-5pm; Wed, Thurs 8am-5pm, Fri 9am-4pm",
        phoneNumber: "(617) 357-6000",
        servicesOfferedLanguages: "English",
      },
      {
        name: "East Boston Community Council",
        serviceType: ["EDUCATION", "LEGAL"],
        extraFilters: [],
        website: "https://ebecc.org/",
        description:
          "Civic engagement, community organizing, legal help, education, and youth development.",
        address: "282 Meridian St, Boston, MA 02128",
        coordinates: "42.376560,-71.039420",
        hours: "9am - 6pm",
        phoneNumber: "617-567-2750",
        servicesOfferedLanguages: "English, Spanish (Latin America)",
      },
      {
        name: "Catholic Charities Boston",
        serviceType: ["EDUCATION", "HOUSING", "FOOD", "LEGAL"],
        extraFilters: [],
        website: "https://www.ccab.org/what-we-do/",
        description:
          "Family and youth services, basic needs, immigrant and refugee services, adult education and workforce development.",
        address: "275 W Broadway, Boston, MA 02127",
        coordinates: "42.339020,-71.051537",
        hours: "7:30am - 6pm",
        phoneNumber: "617-464-8500",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Jewish Vocational Service",
        serviceType: ["EMPLOYMENT", "EDUCATION"],
        extraFilters: ["WHEELCHAIR_ACCESSIBLE"],
        website:
          "https://www.jvs-boston.org/refugee-immigrant-employment-services-2/",
        description:
          "Career coaching, English classes, job search assistance, interview preparation, skills training, career advancement services.",
        address: "75 Federal St, 3rd floor, Boston, MA 02110",
        coordinates: "42.355301,-71.056747",
        hours: "9am - 5pm",
        phoneNumber: "617-399-3131, TTY: 711",
        servicesOfferedLanguages:
          "English, Spanish (Latin America), French, Portuguese (Brazilian), Haitian Creole, Arabic, Mandarin, Cantonese",
      },
      {
        name: "Goodwill Boston Career Center (previously MassHire Downtown Boston Career Center)",
        serviceType: ["EMPLOYMENT"],
        extraFilters: ["WHEELCHAIR_ACCESSIBLE"],
        website: "https://careercenter.goodwillmass.org/",
        description:
          "Free English classes, resume creation worksheets and templates, job application assistance.",
        address: "75 Federal St, 3rd Floor, Boston, MA 02110",
        coordinates: "42.355301,-71.056747",
        hours: "9am - 5pm",
        phoneNumber: "617-399-3100",
        servicesOfferedLanguages: "English",
      },
      {
        name: "East Boston Community Soup Kitchen",
        serviceType: ["FOOD"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://ebcsk.org/",
        description:
          "Monday: food distribution for those facing hunger and homelessness. Tuesday: free hot meals served indoors. No ID required.",
        address:
          "Our Saviour's Lutheran Church, 28 Paris Street, Boston, MA, 02128",
        coordinates: "42.370090,-71.040170",
        hours: "Monday food distribution, Tuesday in-door hot meals",
        phoneNumber: null,
        servicesOfferedLanguages: "Spanish (Latin America), English",
      },
      {
        name: "Roslindale Food Collective",
        serviceType: ["FOOD"],
        extraFilters: ["PARKING_AVAILABLE"],
        website: "https://roslindalefoodcollective.org/",
        description: "Free food distribution every Sunday at 3pm. No ID required.",
        address: "Trinity Church, 1195 Centre Street, West Roxbury",
        coordinates: "42.2988109,-71.1299112",
        hours: "Sunday 3-3:30pm",
        phoneNumber: "857-829-0111",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Fair Foods: First Parish Church",
        serviceType: ["FOOD"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.fairfoods.org/",
        description:
          "$2 bag containing over twelve pounds of mixed fresh produce. No eligibility requirements, no registration, and no ID checks.",
        address: "10 Parish St, Dorchester, MA 02122",
        coordinates: "42.308194,-71.0620443",
        hours: "Friday 2-4pm",
        phoneNumber:
          "(617) 436-0527 (First Parish Church), (617) 288-6185 (Fair Foods)",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Project Citizenship",
        serviceType: ["LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://projectcitizenship.org/",
        description:
          "Legal help applying for citizenship for eligible lawful permanent residents.",
        address: "11 Beacon St Unit 1210, Boston, MA 02108",
        coordinates: "42.3584799,-71.0618133",
        hours: "T-Th 9:30am-4:30pm, M-F by appointment",
        phoneNumber: "617-694-5949",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Refugee & Immigrant Assistance Center (RIAC)",
        serviceType: ["EDUCATION", "LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.riacboston.org/where-we-work/",
        description:
          "Refugee resettlement, referrals to services, benefits assistance, social adjustment counseling, interpretation, casework, citizenship application assistance, and community education programs.",
        address: "253 Roxbury St, Boston, MA 02119",
        coordinates: "42.3304191,-71.0934607",
        hours: "9am-5pm",
        phoneNumber: "(617) 238-2430",
        servicesOfferedLanguages:
          "English, Somali, Arabic, Swahili, French, Dari, Pashto, Maay Maay, Darija",
      },
      {
        name: "Mass Office for Refugees and Immigrants (ORI)",
        serviceType: [
          "HOUSING",
          "EDUCATION",
          "EMPLOYMENT",
          "HEALTHCARE",
          "LEGAL",
        ],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.mass.gov/orgs/office-for-refugees-and-immigrants",
        description:
          "Financial literacy, citizenship for new Americans, refugee employment, education, youth, health, and other services. Divided by eligibility: federal refugee programs, state programs for immigrants, and state emergency assistance.",
        address: "1 Ashburton Place, 5th floor, Boston, MA 02108",
        coordinates: "42.3583,-71.0632",
        hours: "9am-5pm",
        phoneNumber: "617-727-7888",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Kids in Need of Defense (KIND)",
        serviceType: ["LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://supportkind.org/",
        description:
          "Free legal services for unaccompanied immigrant and refugee children seeking humanitarian protection, including asylum, Special Immigrant Juvenile Status, and removal defense.",
        address: "11 Beacon St, Suite 820, Boston MA 02108",
        coordinates: "42.3584799,-71.0618133",
        hours: "Mon - Fri 9am - 5pm",
        phoneNumber: "617-207-4138",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Boston Healthcare for the Homeless",
        serviceType: ["HEALTHCARE"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.bhchp.org/",
        description:
          "Access to all BHCHP clinical spaces including dedicated services for immigrants: women's health, HIV care, Hepatitis C care, and gender care.",
        address: "780 Albany Street, Boston, MA 02118",
        coordinates: "42.3336453,-71.0727911",
        hours:
          "M 8am-5pm, T 8am-12pm & 4pm-8pm, W 8am-5pm, Th 8am-8pm, F 8am-5pm",
        phoneNumber: "857-654-1605",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Centro Presente",
        serviceType: ["EDUCATION", "LEGAL"],
        extraFilters: ["LGBTQ_FRIENDLY", "MBTA_ACCESSIBLE"],
        website: "http://www.cpresente.org/",
        description:
          "ESOL classes, citizenship and civic participation classes for adults, community organizing and advocacy programs.",
        address: "12 Bennington St Suite 202, Boston, MA 02145",
        coordinates: "42.37535,-71.0384632",
        hours: "Thursday - Saturday 9am - 5pm",
        phoneNumber: "(857) 256-2981",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Boston Center for Refugee Health & Human Rights",
        serviceType: [
          "HEALTHCARE",
          "EDUCATION",
          "LEGAL",
          "EMPLOYMENT",
          "MENTAL_HEALTH",
        ],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.bcrhhr.com/",
        description:
          "Medical care, mental health services, social services, asylum case evaluations, legal referrals, career development services, and support groups for asylum seekers, refugees, and torture survivors.",
        address: "850 Harrison Ave 7th Floor, Boston, MA 02118",
        coordinates: "42.3344288,-71.0740944",
        hours: "M-F 9am-5pm",
        phoneNumber: "617-414-1994",
        servicesOfferedLanguages: "English",
      },
      {
        name: "U.S. Committee for Refugees and Immigrants",
        serviceType: ["LEGAL", "MENTAL_HEALTH"],
        extraFilters: ["DIGITAL_RESOURCES_ONLY"],
        website: "https://refugees.org/",
        description: null,
        address: null,
        coordinates: null,
        hours: null,
        phoneNumber: null,
        servicesOfferedLanguages: "English",
        isPhysicalAddress: false,
      },
      {
        name: "Massachusetts Alliance of Portuguese Speakers (MAPS)",
        serviceType: ["LEGAL", "MENTAL_HEALTH", "HEALTHCARE", "EMPLOYMENT"],
        extraFilters: ["LGBTQ_FRIENDLY", "MBTA_ACCESSIBLE"],
        website: "https://maps-inc.org/",
        description:
          "Clinical services, citizenship assistance, DV/SA advocacy, translations, mental health and health services, employment and career assistance, elder services, and driver's license support.",
        address: "697 Cambridge St., Suite 203, Brighton, MA 02135",
        coordinates: "42.3509439,-71.1460736",
        hours: "9am-5pm",
        phoneNumber: "617-787-0557",
        servicesOfferedLanguages:
          "Portuguese (Brazilian), Cabo Verdean, English",
      },
      {
        name: "Greater Boston Food Bank",
        serviceType: ["FOOD"],
        extraFilters: ["DIGITAL_RESOURCES_ONLY"],
        website: "https://www.gbfb.org/",
        description:
          "Food pantries, soup kitchens, meal programs like SNAP/EBT. All resources are free and no proof of status required.",
        address: "70 South Bay Avenue, Boston, MA 02118",
        coordinates: "42.3344051,-71.0658327",
        hours: "8am-4:30pm",
        phoneNumber: "617-598-5000",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Brazilian Worker Center (BWC)",
        serviceType: ["EMPLOYMENT", "EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://braziliancenter.org/",
        description:
          "Educating immigrants on their rights and supporting them through the employment process.",
        address: "14 Harvard Ave #2, Allston, MA 02134",
        coordinates: "42.3552369,-71.1324104",
        hours: "M-F 10am-4pm",
        phoneNumber: "(617) 783-8001",
        servicesOfferedLanguages: "English",
      },
      {
        name: "NeighborHealth (formerly East Boston Community Health Center)",
        serviceType: ["HEALTHCARE"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.neighborhealth.com/en/about/who-we-are/",
        description:
          "Primary and specialty healthcare across multiple Greater Boston locations.",
        address: "Multiple locations in Greater Boston",
        coordinates: null,
        hours: "8am-5pm most locations",
        phoneNumber: "varies per location",
        servicesOfferedLanguages: "English",
        isPhysicalAddress: false,
      },
      {
        name: "MIRA (Massachusetts Immigrant and Refugee Advocacy Coalition)",
        serviceType: ["LEGAL", "EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://miracoalition.org/about-us/",
        description:
          "Citizenship, immigrant assistance services, policy analysis, legislative and administrative advocacy. Coalition of 100+ organizations.",
        address: "69 Canal Street 3rd Floor, Boston, MA 02114",
        coordinates: "42.3640688,-71.0594262",
        hours: "M-F 9am - 5pm",
        phoneNumber: "(617) 350-5480",
        servicesOfferedLanguages:
          "English, Portuguese (Brazilian), Spanish (Latin America)",
      },
      {
        name: "Center to Support Immigrant Organizing",
        serviceType: ["EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.csioboston.org/",
        description:
          "Supports immigrant groups and communities dedicated to organizing around issues that affect their lives, developing power and leadership.",
        address: "89 South Street Suite 203, Boston, MA 02111",
        coordinates: "42.3518221,-71.0573484",
        hours: "9am - 5pm",
        phoneNumber: "(617) 742-5165",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Greater Boston Legal Services",
        serviceType: ["LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.gbls.org/",
        description:
          "Free legal assistance to families and individuals living in poverty to help them assert their rights and secure basic necessities.",
        address: "197 Friend Street Boston, MA 02114",
        coordinates: "42.36417,-71.0604864",
        hours: "9am - 5pm",
        phoneNumber: "617-371-1234",
        servicesOfferedLanguages:
          "Haitian Creole, English, Spanish (Latin America), Mandarin, Vietnamese",
      },
      {
        name: "YMCA Mobile Markets",
        serviceType: ["FOOD"],
        extraFilters: ["DIGITAL_RESOURCES_ONLY"],
        website: "https://ymcaboston.org/mobilemarket/",
        description:
          "Mobile trucks providing produce and shelf-stable food products across Greater Boston.",
        address: "Varies per truck location",
        coordinates: null,
        hours: "Varies per location",
        phoneNumber: null,
        servicesOfferedLanguages:
          "English, Spanish (Latin America), Portuguese (Brazilian), Arabic, Mandarin",
        isPhysicalAddress: false,
      },
      {
        name: "Waldo Immigration and Refugee Services Inc",
        serviceType: ["HOUSING", "EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://waldorefugee.org/#about",
        description:
          "Low-income housing assistance, rent assistance referral, immigration referrals, court assistance, eviction prevention, home ownership support, and free financial literacy programs.",
        address: "257 Roxbury Street, Roxbury MA 02119",
        coordinates: "42.3304191,-71.0934607",
        hours: "9am - 5pm",
        phoneNumber: "781-408-8939",
        servicesOfferedLanguages:
          "Somali, English, Arabic, French, Dari, Pashto, Maay Maay, Darija, Swahili",
      },
      {
        name: "African Community Economic Development of New England (ACEDONE)",
        serviceType: ["EDUCATION", "HOUSING", "HEALTHCARE"],
        extraFilters: [],
        website: "https://www.acedone.org/youth-programs",
        description:
          "Education services for African refugees and immigrants including after-school tutoring, college prep, and leadership development for refugee youth.",
        address: "48 John Eliot Square, Roxbury MA 02119",
        coordinates: "42.3299294,-71.0908219",
        hours: "9am - 5pm",
        phoneNumber: "(617)-708-0754",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Political Asylum Immigration Representation Project (PAIR)",
        serviceType: ["LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.pairproject.org/",
        description:
          "Pro bono legal services for asylum seekers and immigrants. Works with external organizations to provide additional services.",
        address: "98 N Washington St #106, Boston, MA 02114",
        coordinates: "42.365624,-71.0587343",
        hours: "9am - 5pm",
        phoneNumber: "(617) 742-9296",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Fenway Cares",
        serviceType: ["FOOD", "HEALTHCARE"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://fenwaycommunitycenter.org/food-distributions/",
        description:
          "Free produce bags every other Wednesday at 3:30 PM. Mass General Brigham Community Care Van on site providing blood pressure screenings, immunizations, and more.",
        address: "39 Edgerly Rd, Boston, MA 02115",
        coordinates: "42.3432,-71.0976",
        hours: "Every other Wednesday 3:30pm - while supplies last",
        phoneNumber: "857-246-9053",
        servicesOfferedLanguages: "English",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
