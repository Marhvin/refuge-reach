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
          "Offers free English classes, citizenship application services",
        address: "442 Main Street, Malden, MA 02148",
        coordinates: null,
        hours: null,
        phoneNumber: "781-322-9777",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Immigrant Family Services Institute",
        serviceType: ["EDUCATION", "LEGAL", "HOUSING", "HEALTHCARE"],
        extraFilters: [],
        website: "https://www.ifsi-usa.org/whatwedo#services",
        description: null,
        address: "1626 Blue Hill Avenue, Mattapan, MA 02126",
        coordinates: null,
        hours: null,
        phoneNumber: "617.322.1348",
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
        coordinates: null,
        hours: "9am - 4pm",
        phoneNumber: null,
        servicesOfferedLanguages: "English",
      },
      {
        name: "International Institute of New England",
        serviceType: ["FOOD", "HOUSING", "EMPLOYMENT", "EDUCATION", "LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://iine.org/",
        description: null,
        address: "2 Boylston Street, 3rd Floor Boston, MA 02116",
        coordinates: null,
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
          "Offers services to help with the naturalization application process and citizenship interview preparation",
        address: "178 Tremont St, Boston, MA 02111",
        coordinates: null,
        hours: "M,Tues 9am-5pm; Wed, Thurs 8am-5pm, Fri 9am-4pm",
        phoneNumber: "(617) 357-6000",
        servicesOfferedLanguages: "English",
      },
      {
        name: "East Boston Community Council",
        serviceType: ["EDUCATION", "LEGAL"],
        extraFilters: [],
        website: "https://ebecc.org/",
        description: null,
        address: "282 Meridian St, Boston, MA 02128",
        coordinates: null,
        hours: "9am - 6pm",
        phoneNumber: "no public",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Catholic Charities Boston",
        serviceType: ["EDUCATION", "HOUSING", "FOOD", "LEGAL"],
        extraFilters: [],
        website: "https://www.ccab.org/what-we-do/",
        description:
          "Family and youth services, basic needs, immigrant and refugee services, adult education",
        address: "275 W Broadway, Boston, MA 02127",
        coordinates: null,
        hours: "7:30am - 6pm",
        phoneNumber: "617-464-8500",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Jewish Vocational Service",
        serviceType: ["EMPLOYMENT"],
        extraFilters: ["WHEELCHAIR_ACCESSIBLE"],
        website:
          "https://www.jvs-boston.org/refugee-immigrant-employment-services-2/",
        description:
          "Career coaching, English classes, job search assistance, interview preparation, skills training",
        address: "75 Federal St, 3rd floor, Boston, MA 02110",
        coordinates: null,
        hours: "9am - 5 PM",
        phoneNumber: "617-399-3131, TTY: 711",
        servicesOfferedLanguages:
          "English, Spanish (Latin America), French, Portuguese (Brazilian), Haitian Creole, Arabic, Mandarin, Cantonese",
      },
      {
        name: "MassHire Downtown Boston Career Center",
        serviceType: ["EMPLOYMENT"],
        extraFilters: ["WHEELCHAIR_ACCESSIBLE"],
        website:
          "https://masshiredowntownboston.org/refugee-immigrant-resources/",
        description:
          "Free English classes, resume creation worksheets, job application assistance",
        address: "75 Federal St, 3rd Floor, Boston, MA 02110",
        coordinates: null,
        hours: "9am - 5pm",
        phoneNumber: "617-399-3100",
        servicesOfferedLanguages: "English",
      },
      {
        name: "East Boston Community Soup Kitchen",
        serviceType: ["FOOD"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://ebcsk.org/",
        description: "Provides food distribution and hot meals",
        address:
          "Our Saviour’s Lutheran Church, 28 Paris Street, Boston, MA, 02128",
        coordinates: null,
        hours:
          "Monday is Food distribution, Tuesday in-door hotmeals, hours not on website",
        phoneNumber: null,
        servicesOfferedLanguages: "Spanish (Latin America), English",
      },
      {
        name: "Roslindale Food Collective",
        serviceType: ["FOOD"],
        extraFilters: ["PARKING_AVAILABLE"],
        website: "https://roslindalefoodcollective.org/",
        description: "Free food distribution every Sunday at 3 pm",
        address: "Trinity Church 1195 Centre Street, West Roxbury",
        coordinates: null,
        hours: "Sunday 3-3:30pm",
        phoneNumber: null,
        servicesOfferedLanguages: "English",
      },
      {
        name: "Fair Foods: First Parish Church",
        serviceType: ["FOOD"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.fairfoods.org/",
        description:
          "$2 bag containing over twelve pounds of mixed fresh produce, no ID checks",
        address: "10 Parish St, Dorchester, MA 02122",
        coordinates: null,
        hours: "Friday 2-4pm",
        phoneNumber: "(617) 436-0527",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Project Citizenship",
        serviceType: ["LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://projectcitizenship.org/",
        description: "Legal help applying for citizenship",
        address: "11 Beacon St Unit 1210, Boston, MA 02108",
        coordinates: null,
        hours: "M-F 9:30am-4:30pm",
        phoneNumber: "617-694-5949",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Refugee & Immigrant Assistance Center (RIAC)",
        serviceType: ["EDUCATION", "LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.riacboston.org/where-we-work/",
        description:
          "Refugee resettlement, referrals, citizen application assistance, community programs",
        address: "253 Roxbury St, Boston, MA 02119",
        coordinates: null,
        hours: "9am-5pm",
        phoneNumber: "617-238-2430",
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
          "Financial literacy, citizenship, refugee employment, education, youth, health",
        address: "600 Washington St 4th floor, Boston, MA 02111",
        coordinates: null,
        hours: "9am-5pm",
        phoneNumber: "617-727-7888",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Kids in Need of Defense (KIND)",
        serviceType: ["LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://supportkind.org/",
        description: "Provides unaccompanied children with legal assistance",
        address: "11 Beacon St, Suite 820, Boston MA 02108",
        coordinates: null,
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
          "Access to clinical spaces including services for immigrants: Women's health, HIV care, Hepatitis C care, and Gender care",
        address: "780 Albany Street, Boston, MA 02118",
        coordinates: null,
        hours:
          "M 8am-5pm, T 8am-12pm & 4pm-8pm, W 8am-5pm, Th 8am-8pm, F 8am-5pm",
        phoneNumber: "857-654-1000",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Centro Presente",
        serviceType: ["EDUCATION", "LEGAL", "EDUCATION"],
        extraFilters: ["LGBTQ_FRIENDLY", "MBTA_ACCESSIBLE"],
        website: "http://www.cpresente.org/",
        description:
          "ESOL classes, citizenship classes, community organizing, and advocacy programs",
        address: "12 Bennington St Suite 202, Boston, MA 02145",
        coordinates: null,
        hours: "Thursday - Saturday 9am - 5pm",
        phoneNumber: "857-256-2981",
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
          "Medical care, mental health services, social services, legal referrals, career development",
        address: "850 Harrison Ave 7th Floor, Boston, MA 02118",
        coordinates: null,
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
      },
      {
        name: "Massachusetts Alliance of Portuguese Speakers (MAPS)",
        serviceType: ["LEGAL", "MENTAL_HEALTH", "HEALTHCARE", "EMPLOYMENT"],
        extraFilters: ["LGBTQ_FRIENDLY", "MBTA_ACCESSIBLE"],
        website: "https://maps-inc.org/",
        description:
          "Clinical services, citizenship assistance, DV/SA advocacy, translations, mental health and health services",
        address: "697 Cambridge St., Suite 203, Brighton, MA 02135",
        coordinates: null,
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
          "Food pantries, soup kitchens, meal programs like SNAP/EBT",
        address: "70 South Bay Avenue, Boston, MA 02118",
        coordinates: null,
        hours: "8am-4:30pm",
        phoneNumber: "617-598-5000",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Brazilian Worker Center (BWC)",
        serviceType: ["EMPLOYMENT", "EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://braziliancenter.org/",
        description: "Educating immigrants on rights, employment support",
        address: "14 Harvard Ave #2, Allston, MA 02134",
        coordinates: null,
        hours: "M-F 10am-4pm",
        phoneNumber: "617-783-8001",
        servicesOfferedLanguages: "English",
      },
      {
        name: "NeighborHealth (formerly East Boston Community Health Center)",
        serviceType: ["HEALTHCARE"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.neighborhealth.com/en/about/who-we-are/",
        description: "Primary and specialty healthcare",
        address: "Multiple locations in Greater Boston",
        coordinates: null,
        hours: "8am-5pm most locations",
        phoneNumber: "varies per location",
        servicesOfferedLanguages: "English",
      },
      {
        name: "MIRA (Massachusetts Immigrant and Refugee Advocacy Coalition)",
        serviceType: ["LEGAL", "EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://miracoalition.org/about-us/",
        description: "Citizenship, immigrant assistance services",
        address: "69 Canal Street 3rd Floor, Boston, MA 02114",
        coordinates: null,
        hours: "9am - 5pm",
        phoneNumber: "617-350-5480",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Center to Support Immigrant Organizing",
        serviceType: ["EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.csioboston.org/",
        description:
          "Supports immigrant groups in community organizing and leadership development",
        address: "89 South Street Suite 203, Boston, MA 02111",
        coordinates: null,
        hours: "9am - 5pm",
        phoneNumber: "617-742-5165",
        servicesOfferedLanguages: "English",
      },
      {
        name: "Greater Boston Legal Services",
        serviceType: ["LEGAL"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://www.gbls.org/",
        description: "Free legal assistance for low-income individuals",
        address: "197 Friend Street Boston, MA 02114",
        coordinates: null,
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
          "Mobile trucks providing produce and shelf-stable food products",
        address: "Varies per truck location",
        coordinates: null,
        hours: "Varies per location",
        phoneNumber: null,
        servicesOfferedLanguages:
          "English, Spanish (Latin America), Portuguese (Brazilian), Arabic, Mandarin",
      },
      {
        name: "Waldo Immigration and Refugee Services Inc",
        serviceType: ["HOUSING", "EDUCATION"],
        extraFilters: ["MBTA_ACCESSIBLE"],
        website: "https://waldorefugee.org/#about",
        description:
          "Housing assistance, immigration referrals, financial literacy programs",
        address: "257 Roxbury Street, Roxbury MA 02119",
        coordinates: null,
        hours: null,
        phoneNumber: "781-408-8939",
        servicesOfferedLanguages: "Somali, English, Arabic, French",
      },
      {
        name: "African Community Economic Development of New England (ACEDONE)",
        serviceType: ["EDUCATION"],
        extraFilters: [],
        website: "https://www.acedone.org/youth-programs",
        description:
          "Education services for African refugees and immigrants, including after-school tutoring",
        address: "48 John Eliot Square, Roxbury MA 02119",
        coordinates: null,
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
          "Pro bono legal services for asylum seekers and immigrants",
        address: "98 N Washington St #106, Boston, MA 02114",
        coordinates: null,
        hours: "9am - 5pm",
        phoneNumber: "617-742-9296",
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