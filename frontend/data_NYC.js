const JURISDICTIONS = {
"bronx_ny": {
    name: "The Bronx",
    population: "~1.47 million",
    description: "The Bronx faces the steepest social challenges of any NYC borough — the highest food insecurity, poverty, eviction, and incarceration rates in the city — alongside significant ecological pressures from legacy industrial pollution, Cross-Bronx Expressway truck traffic, and combined sewer overflows. South Bronx neighborhoods bear the most concentrated burden, making the Bronx ground zero for environmental justice in New York.",
    ecological: [
        {
            name: "climate change",
            level: 50,
            indicator: "Buildings projected to exceed LL97 2030 caps",
            value: "~57% of covered buildings",
            year: 2024,
            target: "Net-zero emissions by 2050 (NYC Climate Mobilization Act)",
            context: "NYC buildings account for roughly two-thirds of the city's greenhouse gas emissions. Bronx per-capita emissions appear lower than Manhattan's, but this is largely a consumption-inequality artifact: lower incomes mean lower consumption, not greener infrastructure. Under LL97, fewer than 10% of Bronx buildings exceeded 2024 caps, but ~57% are projected to exceed tighter 2030 limits. The borough's heat and flood exposure is among the highest in the city.",
            source: "NYC LL84/LL97 benchmarking / NYC Emissions Inventory",
            sourceUrl: "https://www.nyc.gov/site/sustainability/our-programs/nyc-climate-action.page",
            screenshot: "",
            actions: [
                "Enforce LL97 for Bronx mid-size multifamily (dominant building class)",
                "Fund building electrification retrofits through NYSERDA + Con Ed incentives",
                "Expand Bronx urban tree canopy in heat-vulnerable census tracts",
                "Integrate climate resilience into HPD + NYCHA capital plans"
            ]
        },
        {
            name: "ocean acidification",
            level: 100,
            indicator: "Global ocean pH decline since preindustrial era",
            value: "~0.1 pH units (26% increase in acidity)",
            year: 2024,
            target: "Stabilize below 1.5°C warming (Paris Agreement)",
            context: "Ocean acidification is a global planetary boundary in the red zone — ocean pH has dropped ~0.1 units since preindustrial times, a ~26% increase in acidity. NYC contributes through emissions rather than causing it locally; New York Harbor shows measurable pH decline consistent with regional trends. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national monitoring",
            sourceUrl: "https://gml.noaa.gov/ccgg/carbontracker/",
            screenshot: "",
            actions: [
                "Decarbonize the NYC economy consistent with the 2050 net-zero commitment",
                "Protect NY Harbor coastal ecosystems (Billion Oyster Project, living shorelines)",
                "Monitor and publish NY Harbor pH trends alongside global benchmarks",
                "Advocate federal + international emission reductions through mayoral coalitions"
            ]
        },
        {
            name: "chemical pollution",
            level: 100,
            indicator: "Active Superfund and brownfield sites",
            value: "Highest concentration in NYC",
            year: 2024,
            target: "All active sites remediated by 2035 (NYSDEC BCP targets)",
            context: "The Bronx has the highest concentration of active Superfund and brownfield sites in NYC — a legacy of industrial use along the Bronx River, the Hunts Point peninsula, and the Harlem River waterfront. Active 2024 remediation includes the Melrose Avenue site (proposed $3.4M cleanup), North American/Pulse Plastics, and 320 West Fordham Road. 311 sanitation complaints cluster in the same neighborhoods.",
            source: "EPA CERCLIS / NYSDEC BCP",
            sourceUrl: "https://www.epa.gov/cleanups/cleanups-my-community",
            screenshot: "",
            actions: [
                "Accelerate NYSDEC Brownfield Cleanup Program timelines for Bronx sites",
                "Fund DSNY expansion of waste bin siting and street cleaning in high-complaint zones",
                "Require community benefit agreements for all Bronx brownfield redevelopments",
                "Publicly map cumulative impact (air + soil + water) by Bronx census tract"
            ]
        },
        {
            name: "nitrogen & phosphorus loading",
            level: 100,
            indicator: "CSO discharge into Bronx waterways per year",
            value: "~364 million gallons/year remaining (post-mitigation)",
            year: 2024,
            target: "50% CSO reduction by 2030 (NYSDEC consent order)",
            context: "NYC's 398 combined sewer overflow outfalls discharge approximately 18 billion gallons of untreated sewage and stormwater into local waterways each year. The Bronx River and East River are major receiving waters. NYC DEP's 2024 plan for Bronx River outfall HP-009 aims to reduce discharges by 261 million gallons per year, but 364 MGY of overflow remain. Over $52 million has been committed to Bronx River floatable controls.",
            source: "NYC DEP / NYSDEC",
            sourceUrl: "https://www.nyc.gov/site/dep/water/combined-sewer-overflows.page",
            screenshot: "",
            actions: [
                "Continue NYC DEP green infrastructure program (rain gardens, bluebelts)",
                "Build out sewer separation in highest-discharge watersheds",
                "Enforce NYSDEC consent orders for CSO reduction deadlines",
                "Fund Bronx River Alliance water quality monitoring and advocacy"
            ]
        },
        {
            name: "freshwater withdrawals",
            level: -50,
            indicator: "Per capita daily water consumption",
            value: "~75 gallons/person/day",
            year: 2023,
            target: "Maintain below 80 gallons/person/day",
            context: "NYC is one of the most water-efficient major U.S. cities, consuming roughly 75 gallons per person per day compared to the 88-gallon U.S. average. The Catskill/Delaware watershed supplies over 90% of NYC's drinking water under the landmark 1997 Watershed Agreement. This is one of the city's strongest dimensions across all boroughs.",
            source: "NYC DEP Water Supply Reports",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water-supply.page",
            screenshot: "",
            actions: [
                "Maintain Catskill/Delaware watershed protection funding",
                "Continue residential metering and leak detection programs",
                "Expand greywater reuse pilots (DEP, BuildingEnergy programs)",
                "Preserve NYC's filtration-avoidance determination status"
            ]
        },
        {
            name: "land conversion",
            level: 50,
            indicator: "Tree canopy cover in south Bronx census tracts",
            value: "Below 10% (vs. ~25% borough average)",
            year: 2023,
            target: "30% tree canopy citywide by 2035 (NYC Street Tree goal)",
            context: "The Bronx has roughly 25% tree canopy coverage borough-wide, but the distribution is sharply unequal: southern Bronx census tracts drop below 10%, producing urban heat islands of +5 to +8°F above the city average. Pelham Bay Park and Van Cortlandt are ecological assets, but south Bronx residents live furthest from accessible park space. Heat-related mortality during summer events concentrates in the same tree-poor tracts.",
            source: "NYC Parks GIS / NYC TreesCount",
            sourceUrl: "https://tree-map.nycgovparks.org/",
            screenshot: "",
            actions: [
                "Plant trees in south Bronx heat-vulnerable census tracts (NYC Parks)",
                "Expand cool roof + cool street programs (DCP, DDC)",
                "Fund community garden protection (New York Restoration Project, Green Thumb)",
                "Integrate heat resilience into senior housing and NYCHA capital plans"
            ]
        },
        {
            name: "biodiversity loss",
            level: 0,
            indicator: "iNaturalist species observations per borough rank",
            value: "Top 2–3 NYC boroughs",
            year: 2023,
            target: "Maintain and expand Forever Wild natural area designations",
            context: "Despite being one of the most densely populated boroughs, the Bronx supports significant biodiversity. Pelham Bay Park (2,772 acres — NYC's largest) and Van Cortlandt Park anchor a surprisingly rich network of natural areas, and citizen-science data from iNaturalist ranks the Bronx in the top 2–3 NYC boroughs for observed species. This is a dimension the borough performs well on, even amid challenges elsewhere.",
            source: "NYC Audubon / iNaturalist NYC",
            sourceUrl: "https://www.inaturalist.org/places/bronx-county-ny-us",
            screenshot: "",
            actions: [
                "Protect and expand NYC Parks natural areas (Forever Wild designations)",
                "Support NYC Audubon + NYC Wildlife Conservation Fund",
                "Fund citizen-science biodiversity monitoring in schools (iNaturalist, BioBlitzes)",
                "Maintain Bronx River ecological restoration (Bronx River Alliance)"
            ]
        },
        {
            name: "air pollution",
            level: 100,
            indicator: "Annual mean PM2.5 concentration",
            value: "~9–10 μg/m³ (WHO guideline: 5 μg/m³)",
            year: 2024,
            target: "Below 5 μg/m³ (WHO Air Quality Guideline 2021)",
            context: "The Bronx has the highest asthma emergency department visit rate in NYC — 2–3 times the Manhattan rate — driven by truck traffic on I-95 and the Cross-Bronx Expressway and by diesel-intensive land uses in Hunts Point and Port Morris. Annual-mean PM2.5 sits at roughly 9–10 μg/m³, above the WHO guideline of 5 μg/m³, though trending down slightly following 2024 congestion pricing implementation.",
            source: "NYC DOHMH NYCCAS / EPA AQS",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/air-quality-nyc-community-air-survey.page",
            screenshot: "",
            actions: [
                "Expand electric school bus + truck deployment in Bronx fleets",
                "Enforce idling laws + fund enforcement through NYC DEP",
                "Continue MTA bus electrification (Bronx depots prioritized)",
                "Fund Bronx community air monitoring + asthma screening in schools"
            ]
        },
        {
            name: "ozone layer depletion",
            level: -50,
            indicator: "Stratospheric ozone recovery trajectory",
            value: "Projected full recovery by ~2066",
            year: 2024,
            target: "Full ozone layer recovery by 2066 (Montreal Protocol trajectory)",
            context: "Stratospheric ozone depletion is one of the few planetary boundaries trending positively — the 1987 Montreal Protocol successfully phased out CFCs, and the ozone layer is projected to fully recover by around 2066. NYC's contribution at modern scale is negligible. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national ozone monitoring",
            sourceUrl: "https://gml.noaa.gov/ozwv/",
            screenshot: "",
            actions: [
                "Maintain compliance with Montreal Protocol + Kigali Amendment HFC phase-downs",
                "Enforce AIM Act HFC restrictions in refrigeration and cooling",
                "Procure low-GWP refrigerants for city fleets and buildings (DDC, DCAS)",
                "Support continued atmospheric monitoring (advocacy, not local action)"
            ]
        }
    ],
    social: [
        {
            name: "food",
            level: 100,
            indicator: "Adult food insecurity rate",
            value: "~25% of adults",
            year: 2024,
            target: "Below NYC average (21%)",
            context: "The Bronx has the highest rates of food insecurity in NYC: roughly 1 in 4 adults, and all five Bronx community districts top the city for SNAP enrollment at over 40% of residents. Food insecurity intersects directly with health outcomes — diabetes, asthma, maternal health — and the drivers are structural: concentrated poverty, retailer deserts in Mott Haven and Morrisania, and wages that have not kept pace with food inflation.",
            source: "NYC DOHMH Community Health Profiles",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Expand Health Bucks + SNAP double-up at Bronx farmers markets (GrowNYC, Harvest Home)",
                "Fund Bronx food hubs and community fridges through DOHMH microgrants",
                "Support Bronx-based workforce pathways into food retail ownership (BOEDC, BronxWorks)",
                "Strengthen universal school meal programs and summer feeding in high-need CDs"
            ]
        },
        {
            name: "health",
            level: 100,
            indicator: "Life expectancy",
            value: "78.3 years",
            year: 2024,
            target: "NYC average (81 years)",
            context: "Bronx life expectancy sits at 78.3 years — nearly five years below Manhattan and last among NYC boroughs. The county ranks 62nd of 62 in New York State for health outcomes. Premature mortality and preventable hospitalizations remain elevated, driven by upstream factors (housing, food, air quality) more than healthcare access alone. COVID-19 widened rather than closed the gap.",
            source: "NYC DOHMH / County Health Rankings",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Scale DOHMH Neighborhood Health Action Centers in south Bronx",
                "Expand Community Health Worker programs through H+H and BronxCare",
                "Embed housing navigators in primary care settings",
                "Fund hyperlocal chronic disease prevention (diabetes, asthma) via NYC Care"
            ]
        },
        {
            name: "education",
            level: 50,
            indicator: "4-year high school graduation rate",
            value: "~77%",
            year: 2023,
            target: "NYC average (85%)",
            context: "The Bronx 4-year high school graduation rate lags NYC at roughly 77% versus 85% citywide. Chronic absenteeism post-pandemic remains elevated, and fewer than 1 in 4 Bronx adults hold a bachelor's degree. Education outcomes correlate tightly with concentrated poverty and housing instability — which means school-only interventions have limited reach.",
            source: "NYSED / NYC DOE",
            sourceUrl: "https://data.nysed.gov/",
            screenshot: "",
            actions: [
                "Expand 3-K and universal Pre-K enrollment and quality in underserved CDs",
                "Fund community schools with wraparound services (Children's Aid model)",
                "Increase CUNY transfer pathways from Bronx Community College",
                "Reduce chronic absenteeism through attendance teams + housing stability supports"
            ]
        },
        {
            name: "income & work",
            level: 100,
            indicator: "Median household income",
            value: "$46,040",
            year: 2024,
            target: "NYC median ($90,000+)",
            context: "The Bronx median household income is $46,040 — just over half the NYC median — and 28.8% of residents live in poverty. Over 35% of children do. Work itself is not lifting households out: many Bronx workers are in retail, home health, and service roles where wages have not kept pace with rent and food inflation.",
            source: "ACS 5-Year Estimates / NYC Mayor's Office of Economic Opportunity",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand Child Tax Credit + EITC outreach (NYC Free Tax Prep)",
                "Scale sectoral workforce partnerships (Per Scholas, Hot Bread Kitchen, BronxWorks)",
                "Raise floor wages in home care and service work through sectoral bargaining",
                "Invest in childcare accessibility to unlock women's labor force participation"
            ]
        },
        {
            name: "housing",
            level: 100,
            indicator: "Eviction filing rate",
            value: "104.1 per 1,000 rental units (2024)",
            year: 2024,
            target: "Below 50 per 1,000 (NYC average)",
            context: "The Bronx has the highest eviction filing rate in NYC — 104.1 per 1,000 rental units in 2024, more than double the next-highest borough. Roughly 35% of renters are severely rent-burdened, paying over half their income to rent. Median rents have outpaced median incomes by 8.6 percentage points since 2019, and shelter use is at historic highs.",
            source: "Furman Center State of the City 2024",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand Right to Counsel enforcement and funding in Housing Court",
                "Fund ERAP successor programs for eviction prevention",
                "Preserve HUD + NYCHA affordable units through rehab rather than demolition",
                "Support Bronx community land trusts (Mott Haven-Port Morris CLT)"
            ]
        },
        {
            name: "water & sanitation",
            level: 0,
            indicator: "Drinking water EPA compliance",
            value: "100% compliance",
            year: 2024,
            target: "100% compliance + reduce stormwater flooding",
            context: "NYC's drinking water, supplied by the Catskill/Delaware system, is among the cleanest big-city water in the U.S. and meets every EPA standard. The real borough variation shows up in flooding: south Bronx 311 flooding complaints spike during storm events, reflecting aging combined sewers and heavy impervious surface cover.",
            source: "NYC DEP Water Quality",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water.page",
            screenshot: "",
            actions: [
                "Accelerate NYC DEP green infrastructure siting in south Bronx (rain gardens, bioswales)",
                "Expand stormwater management in the Bronx River and Harlem River watersheds",
                "Continue lead service line replacement program (DEP)",
                "Coordinate 311 flooding data with NYCEM + NYC Parks for rapid response"
            ]
        },
        {
            name: "energy",
            level: 50,
            indicator: "Household energy burden (% of income)",
            value: "8–10% of income",
            year: 2024,
            target: "Below 6% (national affordability threshold)",
            context: "Bronx households spend roughly 8–10% of their income on energy — about double the NYC median — and the borough has the highest density of LIHEAP recipients in the city. Energy burden compounds housing insecurity: high utility bills push families to skip other essentials or fall behind on rent.",
            source: "DOE LEAD Tool / NYSERDA",
            sourceUrl: "https://www.energy.gov/scep/slsc/low-income-energy-affordability-data-lead-tool",
            screenshot: "",
            actions: [
                "Expand NYSERDA EmPower+ and Con Ed efficiency upgrades in NYCHA + LIHTC portfolios",
                "Enforce LL97 on Bronx mid-size multifamily buildings",
                "Fund community solar with Bronx-based subscription priority",
                "Pair utility disconnection moratoria with arrears forgiveness during heat/cold emergencies"
            ]
        },
        {
            name: "social equity",
            level: 100,
            indicator: "Homeownership rate",
            value: "20.1%",
            year: 2024,
            target: "NYC average (33%)",
            context: "The Bronx-Manhattan median household income gap exceeds $50,000 — one of the sharpest intra-city gaps in the country. Homeownership in the Bronx stands at 20.1%, well below the citywide average, and racial wealth disparities in NYC remain severe: Black and Hispanic households hold a fraction of the assets of their white peers. Structural segregation (Black-white dissimilarity index ~0.73) reproduces this pattern across generations.",
            source: "Furman Center / NYC Comptroller",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand first-generation homeownership down-payment assistance (HPD)",
                "Invest in community wealth-building (worker cooperatives, CLTs)",
                "Strengthen NYC Inclusionary Housing in rezoned Bronx areas",
                "Fund reparative programs in historically redlined CDs (Crotona, Morrisania, Hunts Point)"
            ]
        },
        {
            name: "peace & justice",
            level: 100,
            indicator: "Neighborhood incarceration rate (Mott Haven)",
            value: "~1,214 per 100,000 residents",
            year: 2022,
            target: "NYC average (<400 per 100,000)",
            context: "Mott Haven has a neighborhood incarceration rate of roughly 1,214 per 100,000 residents — multiples of the NYC average. The disparity in jail admissions between Black and white Bronx residents grew from 4.8x to 8.9x between 2016 and 2021. South Bronx zip codes consistently supply the largest share of NYC jail admissions, year after year.",
            source: "NYC Open Data (NYPD) / Prison Policy Initiative",
            sourceUrl: "https://opendata.cityofnewyork.us/",
            screenshot: "",
            actions: [
                "Expand alternatives to incarceration (Bronx Defenders, BronxConnect)",
                "Fund hyperlocal violence interruption (Life Camp, BronxRISES, Save Our Streets Bronx)",
                "Eliminate low-level arrest quotas that drive Black-white disparity",
                "Invest in reentry housing and employment specifically in south Bronx CDs"
            ]
        },
        {
            name: "political voice",
            level: 100,
            indicator: "Presidential election voter turnout",
            value: "~50%",
            year: 2024,
            target: "NYC average (60%)",
            context: "Bronx voter turnout lags the city and the state. Presidential turnout runs roughly 50% in the Bronx versus 60% citywide; local election turnout drops below 18%. Low turnout reproduces resource-allocation gaps — districts that vote less often attract less attention and less spending, which reinforces the original disengagement.",
            source: "NYC Board of Elections",
            sourceUrl: "https://vote.nyc/",
            screenshot: "",
            actions: [
                "Fund NYC Civic Engagement Commission participatory budgeting expansion in Bronx CDs",
                "Support Bronx-based voter registration organizations (NYCLU, Vote NYC, BPHN)",
                "Strengthen early voting + ranked-choice voting education",
                "Expand Community Board outreach in languages beyond English and Spanish"
            ]
        },
        {
            name: "gender equality",
            level: 50,
            indicator: "Gender wage gap (citywide)",
            value: "~87¢ per dollar earned by men",
            year: 2023,
            target: "Equal pay ($1.00 per dollar)",
            context: "NYC's gender wage gap sits at approximately 87 cents on the dollar citywide — better than the national figure but still translating into significant lifetime earnings loss, concentrated among women of color. Borough-level wage data is not published, so this indicator reflects citywide data. Note: this is a citywide figure, not Bronx-specific.",
            source: "ACS (citywide)",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand NYC salary transparency law enforcement (NYC CCHR)",
                "Fund childcare accessibility as a labor-force participation lever (NYC DOE, ACS)",
                "Support women-led businesses and cooperatives through Bronx SBDC",
                "Close pay disparities in health and human services contracted workforces"
            ]
        },
        {
            name: "networks",
            level: 50,
            indicator: "Households lacking home broadband",
            value: "22–25% of households",
            year: 2023,
            target: "Below 5% (Big Apple Connect + NYC Internet Master Plan goal)",
            context: "The Bronx faces a dual challenge: while 93% of residents live within a half-mile of a subway or bus (strong transit coverage), 22–25% of households lack home broadband — the highest rate in NYC and nearly double the citywide figure. Digital access is as much a cost and infrastructure problem as a technology one, exposed acutely during 2020 remote schooling.",
            source: "ACS B28002 / MTA GTFS",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Implement NYC Internet Master Plan + Big Apple Connect expansion in NYCHA",
                "Fund community-owned broadband pilots (NYC Mesh, People's Choice Communications)",
                "Expand device distribution programs in schools and libraries",
                "Accelerate MTA bus network redesign and Fair Fares enrollment in transit-poor areas"
            ]
        }
    ]
},
"manhattan_ny": {
    name: "Manhattan",
    population: "~1.63 million",
    description: "Manhattan is NYC's most unequal borough — highest life expectancy and income alongside the sharpest neighborhood gaps in the city. A 9-year life expectancy gulf separates the Upper East Side from East Harlem, one mile apart. As NYC's commercial core, Manhattan's LL97 compliance drives citywide building emissions outcomes. Congestion pricing (2024) offers early signs of progress on air quality.",
    ecological: [
        {
            name: "climate change",
            level: 100,
            indicator: "Buildings projected to exceed LL97 2030 caps",
            value: "~57% of covered buildings (concentrated in commercial towers)",
            year: 2024,
            target: "Net-zero emissions by 2050 (NYC Climate Mobilization Act)",
            context: "Manhattan has the highest per-capita building emissions in NYC — a product of dense luxury housing and the Manhattan office cluster. LL97 compliance in Manhattan is the single most consequential climate-policy lever in NYC: fewer than 10% of NYC buildings exceeded the 2024 cap, but an estimated 57% are projected to exceed 2030 caps, and Manhattan commercial towers make up a disproportionate share.",
            source: "NYC LL84/LL97 / NYC Emissions Inventory",
            sourceUrl: "https://www.nyc.gov/site/sustainability/our-programs/nyc-climate-action.page",
            screenshot: "",
            actions: [
                "Enforce LL97 on Manhattan commercial office towers",
                "Fund building electrification retrofits through NYSERDA + Con Ed incentives",
                "Expand urban tree canopy in heat-vulnerable Manhattan census tracts",
                "Integrate climate resilience into HPD + NYCHA Manhattan capital plans"
            ]
        },
        {
            name: "ocean acidification",
            level: 100,
            indicator: "Global ocean pH decline since preindustrial era",
            value: "~0.1 pH units (26% increase in acidity)",
            year: 2024,
            target: "Stabilize below 1.5°C warming (Paris Agreement)",
            context: "Ocean acidification is a global planetary boundary in the red zone — ocean pH has dropped ~0.1 units since preindustrial times, a ~26% increase in acidity. NYC contributes through emissions rather than causing it locally; New York Harbor shows measurable pH decline consistent with regional trends. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national monitoring",
            sourceUrl: "https://gml.noaa.gov/ccgg/carbontracker/",
            screenshot: "",
            actions: [
                "Decarbonize the NYC economy consistent with the 2050 net-zero commitment",
                "Protect NY Harbor coastal ecosystems (Billion Oyster Project, living shorelines)",
                "Monitor and publish NY Harbor pH trends alongside global benchmarks",
                "Advocate federal + international emission reductions through mayoral coalitions"
            ]
        },
        {
            name: "chemical pollution",
            level: 0,
            indicator: "Active Superfund sites",
            value: "Fewer than any other borough; legacy sites largely remediated",
            year: 2024,
            target: "Zero active Superfund sites; full lead paint compliance",
            context: "Manhattan has fewer active Superfund and brownfield sites than Bronx, Brooklyn, or Queens — the borough's industrial legacy is older and largely remediated. But legacy lead paint in older tenements remains a concern, and specific sites (historic Gansevoort, Hudson Yards) required remediation during recent redevelopment. DSNY cleanliness scores in Manhattan are NYC's highest.",
            source: "EPA CERCLIS / NYC OASIS",
            sourceUrl: "https://www.epa.gov/cleanups/cleanups-my-community",
            screenshot: "",
            actions: [
                "Enforce lead paint disclosure + remediation in pre-1978 rental housing",
                "Accelerate NYSDEC Brownfield Cleanup Program timelines on remaining Manhattan sites",
                "Require community benefit agreements for remaining Manhattan brownfield redevelopments",
                "Publicly map cumulative impact (air + soil + water) by Manhattan census tract"
            ]
        },
        {
            name: "nitrogen & phosphorus loading",
            level: 100,
            indicator: "Annual CSO discharge volume into Manhattan waterways",
            value: "~18 billion gallons citywide; west-side outfalls among highest-volume",
            year: 2024,
            target: "50% CSO reduction by 2030 (NYSDEC consent order)",
            context: "Manhattan CSO outfalls discharge into the Hudson, East, and Harlem Rivers. West-side outfalls (e.g., W. 135th St) are among NYC's highest-volume. The 398-outfall system citywide discharges roughly 18 billion gallons of untreated stormwater + sewage annually; Manhattan's dense impervious surface coverage makes green-infrastructure siting space-limited.",
            source: "NYC DEP / NYSDEC",
            sourceUrl: "https://www.nyc.gov/site/dep/water/combined-sewer-overflows.page",
            screenshot: "",
            actions: [
                "Continue NYC DEP green infrastructure program (rain gardens, bluebelts where feasible)",
                "Fund Harlem River + Hudson River water-quality monitoring",
                "Build out sewer separation in Manhattan's highest-discharge watersheds",
                "Enforce NYSDEC consent orders for CSO reduction deadlines"
            ]
        },
        {
            name: "freshwater withdrawals",
            level: -50,
            indicator: "Per capita daily water consumption",
            value: "~75 gallons/person/day",
            year: 2023,
            target: "Maintain below 80 gallons/person/day",
            context: "NYC is one of the most water-efficient major U.S. cities, consuming roughly 75 gallons per person per day compared to the 88-gallon U.S. average. The Catskill/Delaware watershed supplies over 90% of NYC's drinking water under the landmark 1997 Watershed Agreement. This is one of the city's strongest dimensions and is similar across all five boroughs.",
            source: "NYC DEP Water Supply Reports",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water-supply.page",
            screenshot: "",
            actions: [
                "Maintain Catskill/Delaware watershed protection funding",
                "Continue residential metering and leak detection programs",
                "Expand greywater reuse pilots (DEP, BuildingEnergy programs)",
                "Preserve NYC's filtration-avoidance determination status"
            ]
        },
        {
            name: "land conversion",
            level: 100,
            indicator: "Tree canopy coverage",
            value: "~20% (lowest in NYC)",
            year: 2023,
            target: "30% tree canopy citywide by 2035",
            context: "Manhattan has the lowest tree canopy coverage in NYC — roughly 20% — and the fewest street trees of any borough (62,427 vs. Queens' 237,974). Central Park masks the gap; outside it, East Harlem, Washington Heights, and the Lower East Side experience +3 to +7°F urban-heat-island elevations. Park acreage per capita is low once Central Park is controlled for.",
            source: "NYC Parks GIS / NYC TreesCount",
            sourceUrl: "https://tree-map.nycgovparks.org/",
            screenshot: "",
            actions: [
                "Plant street trees in East Harlem, Washington Heights, Lower East Side (NYC Parks)",
                "Expand cool-roof + cool-street programs (DCP, DDC)",
                "Protect community gardens (NYRP, Green Thumb) from development pressure",
                "Integrate heat resilience into senior housing and NYCHA capital plans"
            ]
        },
        {
            name: "biodiversity loss",
            level: 50,
            indicator: "iNaturalist borough rank for species observations",
            value: "Near bottom among NYC boroughs outside large parks",
            year: 2023,
            target: "Expand Bird-Friendly Building designations; protect Inwood Hill Park",
            context: "Manhattan's biodiversity is largely concentrated in Central Park, Inwood Hill Park, and Fort Tryon — significant habitat for migrating birds and pollinators, but distributed unevenly. Manhattan ranks near the bottom of NYC boroughs for iNaturalist observations per square mile outside the large parks. The Atlantic Flyway migration corridor remains a major ecological value.",
            source: "NYC Audubon / iNaturalist NYC",
            sourceUrl: "https://www.inaturalist.org/places/new-york-us-ny",
            screenshot: "",
            actions: [
                "Protect Inwood Hill Park + Fort Tryon Park from encroachment",
                "Expand Bird-Friendly Building Council design standards",
                "Fund NYC Audubon + NYC Wildlife Conservation Fund",
                "Maintain + expand pollinator gardens in smaller Manhattan parks"
            ]
        },
        {
            name: "air pollution",
            level: 100,
            indicator: "Annual mean PM2.5 concentration",
            value: "~9–10 μg/m³ (WHO guideline: 5 μg/m³)",
            year: 2024,
            target: "Below 5 μg/m³ (WHO Air Quality Guideline 2021)",
            context: "Manhattan's annual-mean PM2.5 sits at roughly 9–10 μg/m³, above the WHO guideline of 5 μg/m³. FDR Drive and the central business district produce the highest NO2 concentrations in NYC. Asthma ED rates are moderate borough-wide but elevated in Harlem. Congestion pricing (implemented 2024) is expected to drop Manhattan NO2 meaningfully over the next 5 years.",
            source: "NYC DOHMH NYCCAS / EPA AQS",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/air-quality-nyc-community-air-survey.page",
            screenshot: "",
            actions: [
                "Expand electric school bus + truck deployment in Manhattan fleets",
                "Enforce idling laws + fund enforcement through NYC DEP",
                "Maintain + expand congestion pricing (Manhattan CBD)",
                "Fund Harlem community air monitoring + asthma screening in schools"
            ]
        },
        {
            name: "ozone layer depletion",
            level: -50,
            indicator: "Stratospheric ozone recovery trajectory",
            value: "Projected full recovery by ~2066",
            year: 2024,
            target: "Full ozone layer recovery by 2066 (Montreal Protocol trajectory)",
            context: "Stratospheric ozone depletion is one of the few planetary boundaries trending positively — the 1987 Montreal Protocol successfully phased out CFCs, and the ozone layer is projected to fully recover by around 2066. NYC's contribution at modern scale is negligible. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national ozone monitoring",
            sourceUrl: "https://gml.noaa.gov/ozwv/",
            screenshot: "",
            actions: [
                "Maintain compliance with Montreal Protocol + Kigali Amendment HFC phase-downs",
                "Enforce AIM Act HFC restrictions in refrigeration and cooling",
                "Procure low-GWP refrigerants for city fleets and buildings (DDC, DCAS)",
                "Support continued atmospheric monitoring (advocacy, not local action)"
            ]
        }
    ],
    social: [
        {
            name: "food",
            level: 50,
            indicator: "Adult food insecurity rate",
            value: "~14.9% overall; East Harlem/Washington Heights 20–25%",
            year: 2023,
            target: "Below 10% in all community districts",
            context: "Manhattan's food insecurity rate (roughly 14.9% of adults) sits near the NYC average — but the borough average hides one of the sharpest neighborhood gradients in the city. SNAP enrollment and food-insecurity rates in East Harlem and Washington Heights run 20–25%, while SoHo and TriBeCa sit below 5%.",
            source: "NYC DOHMH Community Health Profiles",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Expand Health Bucks + SNAP double-up at Harlem + Washington Heights farmers markets",
                "Fund community fridges and food pantries in uptown CDs through NYC DOHMH microgrants",
                "Protect affordable food retail from commercial-rent displacement in CDs 11 and 12",
                "Strengthen universal school meal programs in Title I schools north of 96th St"
            ]
        },
        {
            name: "health",
            level: 0,
            indicator: "Life expectancy",
            value: "83.2 years (borough average); East Harlem <77 years",
            year: 2024,
            target: "Narrow intra-borough gap to under 5 years",
            context: "Manhattan has the highest life expectancy of any NYC borough at 83.2 years — but the intra-borough gap is nearly nine years between the Upper East Side and East Harlem, a gap larger than between Manhattan and the Bronx overall. Healthcare access is highest in NYC here, but insurance status, housing stability, and chronic-disease burden track closely with the neighborhood gradient.",
            source: "NYC DOHMH Health Atlas",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Expand DOHMH Neighborhood Health Action Centers in Harlem and Washington Heights",
                "Scale H+H Community Health Worker programs in Upper Manhattan",
                "Embed housing-stability navigators in safety-net primary care",
                "Fund chronic-disease prevention in CDs 9, 10, 11, 12"
            ]
        },
        {
            name: "education",
            level: -50,
            indicator: "Bachelor's degree attainment rate",
            value: "~62% (NYC's highest)",
            year: 2023,
            target: "Raise attainment in uptown CDs to match borough average",
            context: "Manhattan has NYC's highest bachelor's+ attainment rate at roughly 62%, nearly double some outer-borough neighborhoods, and a high-school graduation rate tracking the NYC average at ~85%. But these averages reflect the Upper West Side + Upper East Side + private-school pipeline as much as public-school performance in Inwood or East Harlem.",
            source: "NYSED / NYC DOE",
            sourceUrl: "https://data.nysed.gov/",
            screenshot: "",
            actions: [
                "Expand 3-K and universal Pre-K quality in CDs 9, 10, 11, 12",
                "Fund community schools with wraparound services (Children's Aid model)",
                "Reduce chronic absenteeism through housing-stability supports",
                "Increase CUNY pathways for uptown Manhattan residents"
            ]
        },
        {
            name: "income & work",
            level: 50,
            indicator: "Income Gini coefficient",
            value: "~0.60 (among highest of any US urban area)",
            year: 2024,
            target: "Reduce Gini toward 0.45 (high-functioning city benchmark)",
            context: "Manhattan's median household income is roughly $99,000 — highest in NYC — but its poverty rate of 17.2% is counterintuitively close to outer-borough rates because of a bimodal distribution. Manhattan's Gini coefficient (~0.60) is the highest of any NYC borough and among the highest of any urban area in the United States. The Upper East Side median exceeds $150,000; East Harlem sits near $38,000.",
            source: "ACS 5-Year Estimates",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand Child Tax Credit + EITC outreach in uptown CDs (NYC Free Tax Prep)",
                "Protect Manhattan small businesses from commercial-rent displacement",
                "Scale sectoral workforce partnerships in health + tech (Per Scholas, Year Up)",
                "Invest in childcare accessibility to unlock labor-force participation"
            ]
        },
        {
            name: "housing",
            level: 50,
            indicator: "Eviction filing rate",
            value: "~32 per 1,000 rental units; median rent $4,500/month",
            year: 2024,
            target: "Reduce displacement of low-income and minority households",
            context: "Manhattan has a lower eviction-filing rate than most NYC boroughs (around 32 per 1,000 rental units) — but that reflects the loss of rent-stabilized stock as much as stability. Median rent crossed $4,500 in 2024, and the borough's homeless shelter intake remains elevated. Displacement shows up as out-migration, not evictions: Manhattan has been losing Black and Latino households steadily since 2010.",
            source: "Furman Center State of the City 2024",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand Right to Counsel enforcement in Housing Court",
                "Protect and preserve the last rent-stabilized stock through HPD enforcement",
                "Fund Mitchell-Lama + HDFC preservation programs",
                "Support Manhattan community land trusts (El Barrio CLT, East Harlem)"
            ]
        },
        {
            name: "water & sanitation",
            level: 0,
            indicator: "Drinking water EPA compliance",
            value: "100% compliance",
            year: 2024,
            target: "100% compliance + reduce flash flood risk in basement apartments",
            context: "NYC's drinking water, supplied by the Catskill/Delaware system, meets every EPA standard. The real story in Manhattan is flood risk: Ida (2021) and Sandy (2012) both exposed basement apartments in Lower Manhattan, East Harlem, and Inwood to life-threatening flash flooding. The storm-sewer system in Lower Manhattan was not designed for 2020s precipitation intensity.",
            source: "NYC DEP Water Quality",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water.page",
            screenshot: "",
            actions: [
                "Accelerate NYC DEP green infrastructure siting in Lower Manhattan + East Harlem",
                "Expand Basement Apartment Conversion Pilot with flood-safety conditions",
                "Coordinate 311 flooding data with NYCEM + NYC Parks for rapid response",
                "Continue lead service line replacement program (DEP)"
            ]
        },
        {
            name: "energy",
            level: -50,
            indicator: "Household energy burden (% of income)",
            value: "~3–4% of income (lowest in NYC)",
            year: 2024,
            target: "Achieve LL97 compliance for 100% of covered commercial buildings by 2030",
            context: "Manhattan households spend roughly 3–4% of their income on energy — the lowest rate in NYC. But this dimension's story here is commercial: Manhattan holds NYC's single largest concentration of LL97-covered office towers, and an estimated 15–20% of them are projected to exceed the tighter 2030 emission caps without retrofits. Manhattan commercial buildings dominate citywide building-emission totals.",
            source: "DOE LEAD Tool / NYC DOB LL97",
            sourceUrl: "https://www.energy.gov/scep/slsc/low-income-energy-affordability-data-lead-tool",
            screenshot: "",
            actions: [
                "Enforce LL97 compliance on Manhattan commercial office towers",
                "Fund commercial-building retrofits through NYSERDA + Con Ed incentives",
                "Expand NYSERDA EmPower+ in NYCHA north of 96th St",
                "Pair utility disconnection moratoria with arrears forgiveness during emergencies"
            ]
        },
        {
            name: "social equity",
            level: 100,
            indicator: "Income Gini coefficient",
            value: "~0.60 (UES $150K+ vs East Harlem $38K — 1 mile apart)",
            year: 2024,
            target: "Reduce neighborhood income gap; close racial homeownership gap",
            context: "Manhattan's income inequality — measured by Gini coefficient at roughly 0.60 — is the highest of any NYC borough and among the highest of any urban area in the United States. The Upper East Side median household income exceeds $150,000; East Harlem sits near $38,000; the two neighborhoods are a mile apart. Citywide Black-white homeownership patterns reproduce inside Manhattan.",
            source: "Furman Center / NYC Comptroller",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand first-generation homeownership down-payment assistance (HPD)",
                "Fund community wealth-building in Harlem + Washington Heights",
                "Strengthen NYC Inclusionary Housing in rezoned Manhattan areas",
                "Invest in historically redlined census tracts through HUD CDBG-DR"
            ]
        },
        {
            name: "peace & justice",
            level: 50,
            indicator: "Neighborhood incarceration rate (Harlem/Washington Heights)",
            value: "600–900 per 100,000 in highest-rate precincts",
            year: 2022,
            target: "NYC average (<400 per 100,000)",
            context: "Manhattan's borough-wide incarceration rate sits at the NYC median — but the borough average obscures Harlem + Washington Heights, where neighborhood rates climb into the 600–900 per 100,000 range. NYPD Precincts 25, 28, and 32 generate a disproportionate share of borough admissions, and low-level arrest patterns remain racially disparate.",
            source: "NYC Open Data (NYPD) / Prison Policy Initiative",
            sourceUrl: "https://opendata.cityofnewyork.us/",
            screenshot: "",
            actions: [
                "Expand alternatives to incarceration (Bronx Defenders–model groups)",
                "Eliminate low-level arrest quotas that drive racial disparity",
                "Invest in reentry housing and employment in uptown CDs",
                "Fund violence-interruption programs in Harlem and Washington Heights"
            ]
        },
        {
            name: "political voice",
            level: -50,
            indicator: "Presidential election voter turnout",
            value: "~65% (highest in NYC)",
            year: 2024,
            target: "Close uptown/downtown gap (currently 10–15 percentage points)",
            context: "Manhattan has the highest voter turnout in NYC, with presidential turnout around 65% and local-election turnout around 25–30%. Civic engagement is strong, but like other dimensions it concentrates below 110th Street: uptown turnout lags downtown turnout by 10–15 points. Community board participation follows the same pattern.",
            source: "NYC Board of Elections",
            sourceUrl: "https://vote.nyc/",
            screenshot: "",
            actions: [
                "Fund NYC Civic Engagement Commission participatory budgeting in uptown CDs",
                "Strengthen early voting + ranked-choice voting education in Harlem + Washington Heights",
                "Expand Community Board outreach beyond English",
                "Support immigrant civic engagement organizations (NYIC, MinKwon, Mixteca)"
            ]
        },
        {
            name: "gender equality",
            level: 50,
            indicator: "Gender wage gap (citywide)",
            value: "~87¢ per dollar earned by men",
            year: 2023,
            target: "Equal pay ($1.00 per dollar)",
            context: "NYC's gender wage gap sits at approximately 87 cents on the dollar citywide. Manhattan has NYC's highest share of women-led S&P 1500 workers but still reflects the citywide gap. Borough-level wage data is not published; this indicator reflects citywide data and should be read as context rather than a Manhattan-specific measurement.",
            source: "ACS (citywide)",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand NYC salary transparency law enforcement (NYC CCHR)",
                "Fund childcare accessibility as a labor-force participation lever",
                "Support women-led businesses in Manhattan (NYC SBS, BE NYC)",
                "Close pay disparities in contracted health + human services workforces"
            ]
        },
        {
            name: "networks",
            level: -50,
            indicator: "Residents within half-mile of transit",
            value: "~99% (highest in NYC); 12% lack home broadband",
            year: 2023,
            target: "Universal broadband; maintain transit excellence",
            context: "Roughly 99% of Manhattan residents live within a half-mile of a subway or bus — the highest rate in NYC. The transit story in Manhattan is reliability: overcrowding, signal failures, and aging rolling stock degrade the commute even where coverage is universal. Congestion pricing (2024) shows early promise. About 12% of households lack home broadband, rising to 20% in Harlem and Washington Heights.",
            source: "MTA GTFS / ACS B28002",
            sourceUrl: "https://new.mta.info/developers",
            screenshot: "",
            actions: [
                "Fund MTA signal-system modernization (CBTC rollout)",
                "Protect + expand congestion pricing implementation and revenue",
                "Fair Fares expansion in uptown Manhattan (DSS, MTA)",
                "Implement NYC Internet Master Plan + Big Apple Connect in uptown NYCHA"
            ]
        }
    ]
},
"brooklyn_ny": {
    name: "Brooklyn",
    population: "~2.59 million",
    description: "Brooklyn is NYC's most populous borough and its most bifurcated: Park Slope and Carroll Gardens sit alongside some of the deepest poverty in America in Brownsville and East New York. Gentrification-driven displacement of Black households has accelerated since 2019, and Brooklyn holds NYC's highest concentration of active Superfund sites — the Gowanus Canal, Newtown Creek, and the Meeker Avenue Plume.",
    ecological: [
        {
            name: "climate change",
            level: 50,
            indicator: "Buildings projected to exceed LL97 2030 caps",
            value: "~57% of covered buildings",
            year: 2024,
            target: "Net-zero emissions by 2050 (NYC Climate Mobilization Act)",
            context: "Brooklyn per-capita emissions are lower than Manhattan's but higher than the Bronx — a mix of large commercial and dense residential buildings. Gowanus and Navy Yard LL97 risk is concentrated in industrial conversion areas. Coastal flood exposure in Red Hook and Sunset Park compounds the long-term climate risk profile.",
            source: "NYC LL84/LL97 / NYC Emissions Inventory",
            sourceUrl: "https://www.nyc.gov/site/sustainability/our-programs/nyc-climate-action.page",
            screenshot: "",
            actions: [
                "Enforce LL97 compliance in Brooklyn large commercial and multifamily buildings",
                "Fund building electrification retrofits through NYSERDA + Con Ed incentives",
                "Expand coastal resilience planning for Red Hook, Sunset Park, and south Brooklyn",
                "Integrate climate resilience into HPD + NYCHA Brooklyn capital plans"
            ]
        },
        {
            name: "ocean acidification",
            level: 100,
            indicator: "Global ocean pH decline since preindustrial era",
            value: "~0.1 pH units (26% increase in acidity)",
            year: 2024,
            target: "Stabilize below 1.5°C warming (Paris Agreement)",
            context: "Ocean acidification is a global planetary boundary in the red zone — ocean pH has dropped ~0.1 units since preindustrial times, a ~26% increase in acidity. NYC contributes through emissions rather than causing it locally; New York Harbor shows measurable pH decline consistent with regional trends. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national monitoring",
            sourceUrl: "https://gml.noaa.gov/ccgg/carbontracker/",
            screenshot: "",
            actions: [
                "Decarbonize the NYC economy consistent with the 2050 net-zero commitment",
                "Protect NY Harbor coastal ecosystems (Billion Oyster Project, living shorelines)",
                "Monitor and publish NY Harbor pH trends alongside global benchmarks",
                "Advocate federal + international emission reductions through mayoral coalitions"
            ]
        },
        {
            name: "chemical pollution",
            level: 150,
            indicator: "Active Superfund sites",
            value: "Highest concentration in NYC: Gowanus Canal, Newtown Creek, Meeker Avenue Plume",
            year: 2024,
            target: "All active sites remediated; cumulative burden mapped by census tract",
            context: "Brooklyn has NYC's highest concentration of active Superfund sites: the Gowanus Canal (active EPA Superfund cleanup), Newtown Creek (shared with Queens, active cleanup), and the Meeker Avenue Plume in Williamsburg/Greenpoint designated as a state Superfund site in 2024. Legacy industrial contamination is concentrated in Red Hook, Sunset Park, and Newtown Creek — the same neighborhoods with high environmental justice concerns.",
            source: "EPA CERCLIS / NYSDEC BCP",
            sourceUrl: "https://www.epa.gov/cleanups/cleanups-my-community",
            screenshot: "",
            actions: [
                "Accelerate EPA Gowanus Canal Superfund cleanup timeline",
                "Fund NYSDEC Meeker Avenue Plume remediation in Williamsburg/Greenpoint",
                "Require community benefit agreements for all Newtown Creek brownfield redevelopments",
                "Publicly map cumulative pollution burden by Brooklyn census tract"
            ]
        },
        {
            name: "nitrogen & phosphorus loading",
            level: 100,
            indicator: "CSO discharge into Gowanus Canal, Newtown Creek, Jamaica Bay",
            value: "$1.2B committed to Gowanus CSO reduction tunnel (under construction)",
            year: 2024,
            target: "50% CSO reduction by 2030 (NYSDEC consent order)",
            context: "Brooklyn CSOs discharge into the Gowanus Canal, Newtown Creek, and Jamaica Bay — three of NYC's most impaired waterways. Gowanus CSO reduction tunnels are under construction ($1.2B project). Jamaica Bay nitrogen loading drives ecosystem degradation affecting shorebird populations and the broader estuary.",
            source: "NYC DEP / NYSDEC",
            sourceUrl: "https://www.nyc.gov/site/dep/water/combined-sewer-overflows.page",
            screenshot: "",
            actions: [
                "Continue Gowanus Canal CSO reduction tunnel construction",
                "Fund Jamaica Bay water-quality monitoring and CSO reduction",
                "Build out sewer separation in highest-discharge Brooklyn watersheds",
                "Enforce NYSDEC consent orders for CSO reduction deadlines"
            ]
        },
        {
            name: "freshwater withdrawals",
            level: -50,
            indicator: "Per capita daily water consumption",
            value: "~75 gallons/person/day",
            year: 2023,
            target: "Maintain below 80 gallons/person/day",
            context: "NYC is one of the most water-efficient major U.S. cities, consuming roughly 75 gallons per person per day compared to the 88-gallon U.S. average. The Catskill/Delaware watershed supplies over 90% of NYC's drinking water under the landmark 1997 Watershed Agreement. This is one of the city's strongest dimensions and is similar across all five boroughs.",
            source: "NYC DEP Water Supply Reports",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water-supply.page",
            screenshot: "",
            actions: [
                "Maintain Catskill/Delaware watershed protection funding",
                "Continue residential metering and leak detection programs",
                "Expand greywater reuse pilots (DEP, BuildingEnergy programs)",
                "Preserve NYC's filtration-avoidance determination status"
            ]
        },
        {
            name: "land conversion",
            level: 50,
            indicator: "Tree canopy in East New York and Brownsville",
            value: "Under 12% (vs. ~22% borough average)",
            year: 2023,
            target: "30% tree canopy citywide; close heat-equity gap in south/east Brooklyn",
            context: "Brooklyn tree canopy is roughly 22% borough-wide, but sparse in East New York, Brownsville (under 12%), and Sunset Park. Urban heat islands of +5 to +7°F affect central and east Brooklyn. Prospect Park and Marine Park anchor green space, but distribution is inequitable — the neighborhoods with worst heat exposure have the least tree cover.",
            source: "NYC Parks GIS / NYC TreesCount",
            sourceUrl: "https://tree-map.nycgovparks.org/",
            screenshot: "",
            actions: [
                "Plant trees in East New York, Brownsville, and Sunset Park heat-vulnerable tracts",
                "Expand cool-roof + cool-street programs (DCP, DDC)",
                "Protect community gardens from development pressure (NYRP, Green Thumb)",
                "Integrate heat resilience into Brooklyn NYCHA capital plans"
            ]
        },
        {
            name: "biodiversity loss",
            level: 50,
            indicator: "Jamaica Bay salt marsh loss rate",
            value: "Ongoing marsh loss due to sea-level rise and nitrogen loading",
            year: 2023,
            target: "Halt and reverse Jamaica Bay marsh loss by 2035",
            context: "Prospect Park, Jamaica Bay Wildlife Refuge (adjacent to Brooklyn), Marine Park, and Green-Wood Cemetery provide significant habitat. Brooklyn iNaturalist rankings are mid-range for NYC. Jamaica Bay shorebird populations are declining despite restoration efforts, driven by nitrogen loading, sea-level rise, and marsh loss.",
            source: "NYC Audubon / iNaturalist NYC",
            sourceUrl: "https://www.inaturalist.org/places/new-york-us-ny",
            screenshot: "",
            actions: [
                "Protect and expand Marine Park and Green-Wood Cemetery natural areas",
                "Fund Jamaica Bay shorebird habitat restoration",
                "Support citizen-science biodiversity monitoring (iNaturalist, BioBlitzes) in Brooklyn",
                "Maintain Jamaica Bay ecosystem restoration (Jamaica Bay Rockaway Parks Conservancy)"
            ]
        },
        {
            name: "air pollution",
            level: 100,
            indicator: "Annual mean PM2.5 concentration",
            value: "~9–10 μg/m³; asthma ED rates 1.5–2x Manhattan in Bushwick/East NY",
            year: 2024,
            target: "Below 5 μg/m³ (WHO Air Quality Guideline 2021)",
            context: "Brooklyn PM2.5 annual mean is roughly 9–10 μg/m³, above the WHO guideline. The BQE corridor (Sunset Park, Red Hook, Gowanus, Greenpoint) produces elevated NO2. Asthma ED visit rates are elevated in Bushwick, East New York, and Brownsville — 1.5–2x the Manhattan rate south of 14th Street — driven by truck traffic and diesel-intensive operations.",
            source: "NYC DOHMH NYCCAS / EPA AQS",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/air-quality-nyc-community-air-survey.page",
            screenshot: "",
            actions: [
                "Expand electric truck deployment in Brooklyn fleets and distribution centers",
                "Enforce idling laws + fund enforcement through NYC DEP (BQE corridor)",
                "Continue MTA bus electrification in Brooklyn depots",
                "Fund community air monitoring and asthma screening in Bushwick and East New York"
            ]
        },
        {
            name: "ozone layer depletion",
            level: -50,
            indicator: "Stratospheric ozone recovery trajectory",
            value: "Projected full recovery by ~2066",
            year: 2024,
            target: "Full ozone layer recovery by 2066 (Montreal Protocol trajectory)",
            context: "Stratospheric ozone depletion is one of the few planetary boundaries trending positively — the 1987 Montreal Protocol successfully phased out CFCs, and the ozone layer is projected to fully recover by around 2066. NYC's contribution at modern scale is negligible. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national ozone monitoring",
            sourceUrl: "https://gml.noaa.gov/ozwv/",
            screenshot: "",
            actions: [
                "Maintain compliance with Montreal Protocol + Kigali Amendment HFC phase-downs",
                "Enforce AIM Act HFC restrictions in refrigeration and cooling",
                "Procure low-GWP refrigerants for city fleets and buildings (DDC, DCAS)",
                "Support continued atmospheric monitoring (advocacy, not local action)"
            ]
        }
    ],
    social: [
        {
            name: "food",
            level: 100,
            indicator: "Adult food insecurity rate",
            value: "~20.2%",
            year: 2024,
            target: "Below NYC average (21%); eliminate food deserts in CDs 5, 16, 17",
            context: "Brooklyn adult food insecurity is roughly 20.2% (2023/2024 estimates) — second-highest in NYC after the Bronx. Drivers include East New York, Brownsville, and Bushwick where SNAP enrollment is high and food retail is limited. Growing but gentrifying areas like Bed-Stuy and Crown Heights mask neighborhood need even as displacement accelerates.",
            source: "NYC DOHMH Community Health Profiles",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Expand SNAP double-up programs at Brooklyn farmers markets (Greenmarket, Flatbush)",
                "Fund community fridges and food pantries in East New York and Brownsville",
                "Protect affordable food retail in gentrifying neighborhoods through commercial rent stabilization",
                "Strengthen summer and school meal programs in CDs 5, 16, 17"
            ]
        },
        {
            name: "health",
            level: 50,
            indicator: "Life expectancy",
            value: "~80.8 years (borough avg); Brownsville/East NY below 77",
            year: 2024,
            target: "Narrow intra-borough gap; reduce preventable hospitalizations",
            context: "Brooklyn life expectancy is roughly 80.8 years — mid-pack in NYC. Brownsville and East New York expectancy drops below 77; Park Slope and Carroll Gardens exceed 84. The borough average hides a 7+ year gap. Preventable hospitalizations remain elevated in the same neighborhoods experiencing concentrated poverty, high eviction rates, and poor air quality.",
            source: "NYC DOHMH Health Atlas",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Scale DOHMH Neighborhood Health Action Centers in Brownsville and East NY",
                "Expand Community Health Worker programs in south and east Brooklyn",
                "Embed housing navigators in safety-net primary care clinics",
                "Fund chronic-disease prevention targeting diabetes, asthma, and maternal health"
            ]
        },
        {
            name: "education",
            level: 50,
            indicator: "4-year high school graduation rate",
            value: "~83%",
            year: 2023,
            target: "NYC average (85%); reduce chronic absenteeism in Districts 19 and 23",
            context: "Brooklyn's high school graduation rate is roughly 83%, near the NYC average of 85%. BA+ attainment is around 39% (near NYC average). Chronic absenteeism spikes in District 23 (Brownsville) and District 19 (East New York). Displacement of families from gentrifying neighborhoods is disrupting school stability across central and east Brooklyn.",
            source: "NYSED / NYC DOE",
            sourceUrl: "https://data.nysed.gov/",
            screenshot: "",
            actions: [
                "Expand 3-K and Pre-K quality in Districts 19 and 23",
                "Fund community schools with wraparound services in high-need areas",
                "Reduce chronic absenteeism through attendance teams and housing stability supports",
                "Protect school stability for families displaced by gentrification"
            ]
        },
        {
            name: "income & work",
            level: 100,
            indicator: "Poverty rate",
            value: "19.8%; child poverty ~28%",
            year: 2023,
            target: "Reduce poverty rate to NYC average (13%)",
            context: "Brooklyn's median household income is roughly $74,000, and the poverty rate is 19.8%, with child poverty near 28%. Brooklyn has NYC's second-highest income inequality after Manhattan — Greenpoint and Park Slope versus East New York and Brownsville. Workers in south and east Brooklyn face wage stagnation in service and care sectors against rapid rent inflation.",
            source: "ACS 5-Year Estimates",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand Child Tax Credit + EITC outreach in south and east Brooklyn (NYC Free Tax Prep)",
                "Scale sectoral workforce partnerships in health, tech, and green industries",
                "Support worker cooperative development in Bed-Stuy, Crown Heights, East NY",
                "Invest in childcare accessibility to unlock labor-force participation"
            ]
        },
        {
            name: "housing",
            level: 100,
            indicator: "Eviction filing rate",
            value: "60–70 per 1,000 rental units (2024)",
            year: 2024,
            target: "Below 50 per 1,000; stem gentrification-driven displacement",
            context: "Brooklyn eviction filing rates are roughly 60–70 per 1,000 rental units (2024) — third-highest in NYC after the Bronx and Queens. Severe rent burden affects roughly 31% of renters. Rapid displacement pressure has pushed median rents in Crown Heights, Bed-Stuy, and Bushwick up 30–50% since 2019, accelerating the removal of long-term Black and Latino households.",
            source: "Furman Center State of the City 2024",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand Right to Counsel enforcement in Brooklyn Housing Court",
                "Fund ERAP successor programs for eviction prevention in highest-filing zip codes",
                "Preserve affordable housing through HPD anti-displacement programs in gentrifying areas",
                "Support Brooklyn community land trusts (East New York, Crown Heights, Bed-Stuy)"
            ]
        },
        {
            name: "water & sanitation",
            level: 50,
            indicator: "311 coastal flooding complaints (storm events)",
            value: "Elevated in Gowanus, Red Hook, Canarsie, Sheepshead Bay, Coney Island",
            year: 2024,
            target: "Reduce flood risk for 100% of high-exposure coastal census tracts",
            context: "NYC drinking water meets 100% EPA standards. Brooklyn's 311 flooding complaints are elevated in Gowanus, Red Hook, Canarsie, Sheepshead Bay, and Coney Island during storm events — Brooklyn's coastal flood exposure is among NYC's highest. Climate flooding risk is compounding as sea levels rise and precipitation intensity increases.",
            source: "NYC DEP Water Quality / NYC 311",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water.page",
            screenshot: "",
            actions: [
                "Accelerate NYC DEP green infrastructure siting in Gowanus and Red Hook",
                "Advance coastal resiliency projects for south Brooklyn (Army Corps shoreline protection)",
                "Expand Basement Apartment Conversion Pilot with flood-safety requirements",
                "Coordinate 311 flooding data with NYCEM for rapid stormwater response"
            ]
        },
        {
            name: "energy",
            level: 50,
            indicator: "Household energy burden (% of income)",
            value: "~6–7% of income",
            year: 2024,
            target: "Below 6% (national affordability threshold)",
            context: "Brooklyn household energy burden is roughly 6–7% of income — above Manhattan but below the Bronx. Old brownstones and NYCHA stock drive the burden. LL97 compliance is stronger in large-building sub-sectors but mid-size multifamily stock is lagging, particularly in neighborhoods undergoing uneven renovation.",
            source: "DOE LEAD Tool / NYSERDA",
            sourceUrl: "https://www.energy.gov/scep/slsc/low-income-energy-affordability-data-lead-tool",
            screenshot: "",
            actions: [
                "Expand NYSERDA EmPower+ in Brooklyn NYCHA and LIHTC portfolios",
                "Enforce LL97 on mid-size Brooklyn multifamily (brownstones, 5–20 unit buildings)",
                "Fund community solar with Brooklyn-based subscription priority",
                "Pair utility disconnection moratoria with arrears forgiveness during emergencies"
            ]
        },
        {
            name: "social equity",
            level: 100,
            indicator: "Intra-borough income gap",
            value: "Park Slope $150K+ vs Brownsville ~$30K (5x gap within 3 miles)",
            year: 2024,
            target: "Reduce neighborhood income gap; reverse gentrification-driven displacement",
            context: "Brooklyn has stark intra-borough inequality: Park Slope median household income exceeds $150,000; Brownsville is around $30,000 — a 5x gap within 3 miles. Gentrification-driven displacement of Black households in Bed-Stuy and Crown Heights has accelerated. The Black-white homeownership and wealth gap follows citywide patterns, compounded by a century of redlining in Brooklyn.",
            source: "Furman Center / NYC Comptroller",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand first-generation homeownership down-payment assistance (HPD) in redlined CDs",
                "Fund community wealth-building (worker cooperatives, CLTs) in Brownsville and East NY",
                "Strengthen NYC Inclusionary Housing in rezoned Brooklyn areas",
                "Invest reparatively in historically redlined neighborhoods through CDBG-DR"
            ]
        },
        {
            name: "peace & justice",
            level: 100,
            indicator: "Neighborhood incarceration rate (Brownsville)",
            value: "~1,100 per 100,000; borough avg 400–500 per 100,000",
            year: 2022,
            target: "NYC average (<400 per 100,000)",
            context: "Brooklyn neighborhood incarceration rates average 400–500 per 100,000 borough-wide, but Brownsville (~1,100/100K), East New York, and Bedford-Stuyvesant spike to Bronx-level numbers. NYPD precincts 73, 75, 77, and 79 drive most admissions. Racial disparities in arrest and incarceration are severe and concentrated on a small number of blocks.",
            source: "NYC Open Data (NYPD) / Prison Policy Initiative",
            sourceUrl: "https://opendata.cityofnewyork.us/",
            screenshot: "",
            actions: [
                "Expand alternatives to incarceration in south and east Brooklyn",
                "Fund hyperlocal violence interruption programs (Man Up! Inc., Save Our Streets Brooklyn)",
                "Eliminate low-level arrest quotas that drive racial disparity",
                "Invest in reentry housing and employment in Brownsville and East New York"
            ]
        },
        {
            name: "political voice",
            level: 50,
            indicator: "Presidential election voter turnout",
            value: "~55%; local election turnout 18–22%",
            year: 2024,
            target: "Close turnout gap between gentrifying and high-displacement neighborhoods",
            context: "Brooklyn presidential turnout is roughly 55% (2024), and local election turnout is 18–22%. There is large demographic variance: Park Slope turnout is above the NYC average; East New York and Brownsville are below. Displacement is reducing civic continuity in rapidly gentrifying areas as long-term residents are pushed out.",
            source: "NYC Board of Elections",
            sourceUrl: "https://vote.nyc/",
            screenshot: "",
            actions: [
                "Fund participatory budgeting expansion in low-turnout Brooklyn CDs",
                "Support Brooklyn-based voter registration organizations",
                "Strengthen early voting + ranked-choice voting education in highest-displacement neighborhoods",
                "Expand Community Board outreach in languages beyond English and Spanish"
            ]
        },
        {
            name: "gender equality",
            level: 50,
            indicator: "Gender wage gap (citywide)",
            value: "~87¢ per dollar earned by men",
            year: 2023,
            target: "Equal pay ($1.00 per dollar)",
            context: "NYC's gender wage gap sits at approximately 87 cents on the dollar citywide. Borough-level wage data is not published; this indicator reflects citywide data and should be read as context rather than a Brooklyn-specific measurement.",
            source: "ACS (citywide)",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand NYC salary transparency law enforcement (NYC CCHR)",
                "Fund childcare accessibility as a labor-force participation lever",
                "Support women-led businesses and cooperatives through Brooklyn SBDC",
                "Close pay disparities in contracted health + human services workforces"
            ]
        },
        {
            name: "networks",
            level: 0,
            indicator: "Residents within half-mile of transit / households lacking broadband",
            value: "~93% near transit; ~15% lack home broadband",
            year: 2023,
            target: "Universal transit within 0.5 miles; reduce broadband gap to under 5%",
            context: "Roughly 93% of Brooklyn residents live within a half-mile of a subway or bus, but transit deserts persist in Canarsie, Mill Basin, Sea Gate, and Marine Park. About 15% of households lack home broadband, rising to 22% in East New York and Brownsville. Big Apple Connect is expanding in NYCHA buildings but adoption challenges remain in non-NYCHA low-income rental stock.",
            source: "MTA GTFS / ACS B28002",
            sourceUrl: "https://new.mta.info/developers",
            screenshot: "",
            actions: [
                "Accelerate MTA bus network redesign in south and east Brooklyn",
                "Fair Fares expansion + enrollment outreach (DSS, MTA)",
                "Expand NYC Internet Master Plan + Big Apple Connect in Brooklyn NYCHA",
                "Fund community-owned broadband pilots in Brownsville and East New York"
            ]
        }
    ]
},
"queens_ny": {
    name: "Queens",
    population: "~2.25 million",
    description: "Queens is the most ethnically diverse large county in the United States — 138+ languages spoken — and home to the country's highest density of immigrant small businesses. Life expectancy is the highest of any NYC borough at 81.3 years, driven in part by a 'healthy migrant' effect. Southeast Queens (Jamaica, Far Rockaway) and the Rockaways face the steepest social and environmental challenges, while the borough's JFK/LaGuardia airports drive significant emissions and noise burdens.",
    ecological: [
        {
            name: "climate change",
            level: 50,
            indicator: "Coastal flood exposure (Rockaways and SE Queens)",
            value: "Major inundation during Superstorm Sandy and Hurricane Ida",
            year: 2024,
            target: "Net-zero emissions by 2050; coastal resilience for highest-risk areas",
            context: "Queens per-capita emissions are mid-range. JFK and LaGuardia airports drive significant aviation emissions attributed to NYC but not included in borough per-capita tallies. Rockaway and southeast Queens coastal exposure is extreme — Superstorm Sandy inundated large parts of the Rockaways, and sea-level rise is accelerating the risk.",
            source: "NYC LL84/LL97 / NYC Emissions Inventory",
            sourceUrl: "https://www.nyc.gov/site/sustainability/our-programs/nyc-climate-action.page",
            screenshot: "",
            actions: [
                "Advance Rockaways coastal resilience and managed retreat programs (Army Corps, NYCEDC)",
                "Enforce LL97 compliance in Queens large multifamily and commercial buildings",
                "Fund building electrification retrofits through NYSERDA + Con Ed incentives",
                "Integrate climate resilience into Queens NYCHA and HPD capital plans"
            ]
        },
        {
            name: "ocean acidification",
            level: 100,
            indicator: "Global ocean pH decline since preindustrial era",
            value: "~0.1 pH units (26% increase in acidity)",
            year: 2024,
            target: "Stabilize below 1.5°C warming (Paris Agreement)",
            context: "Ocean acidification is a global planetary boundary in the red zone — ocean pH has dropped ~0.1 units since preindustrial times, a ~26% increase in acidity. NYC contributes through emissions rather than causing it locally; New York Harbor shows measurable pH decline consistent with regional trends. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national monitoring",
            sourceUrl: "https://gml.noaa.gov/ccgg/carbontracker/",
            screenshot: "",
            actions: [
                "Decarbonize the NYC economy consistent with the 2050 net-zero commitment",
                "Protect NY Harbor coastal ecosystems (Billion Oyster Project, living shorelines)",
                "Monitor and publish NY Harbor pH trends alongside global benchmarks",
                "Advocate federal + international emission reductions through mayoral coalitions"
            ]
        },
        {
            name: "chemical pollution",
            level: 100,
            indicator: "Active Superfund and brownfield sites",
            value: "Newtown Creek (shared), Long Island City/Maspeth/College Point legacy sites, JFK brownfields",
            year: 2024,
            target: "All active sites remediated; Jamaica Bay sediment restored",
            context: "Queens shares the Newtown Creek Superfund site with Brooklyn (active cleanup). Legacy industrial sites exist in Long Island City, Maspeth, and College Point. JFK area has multiple brownfields. Jamaica Bay sediment contamination is significant, affecting the ecology of this nationally important wildlife refuge.",
            source: "EPA CERCLIS / NYSDEC BCP",
            sourceUrl: "https://www.epa.gov/cleanups/cleanups-my-community",
            screenshot: "",
            actions: [
                "Accelerate Newtown Creek Superfund cleanup timeline",
                "Fund NYSDEC Brownfield Cleanup Program for Long Island City and Maspeth sites",
                "Require community benefit agreements for JFK-area brownfield redevelopments",
                "Publicly map cumulative pollution burden by Queens census tract"
            ]
        },
        {
            name: "nitrogen & phosphorus loading",
            level: 100,
            indicator: "Jamaica Bay salt marsh loss",
            value: "Ongoing; $1.2B in Jamaica Bay CSO reduction committed",
            year: 2024,
            target: "50% CSO reduction by 2030; halt marsh loss in Jamaica Bay",
            context: "Queens CSOs discharge into Newtown Creek, Flushing Bay, and Jamaica Bay. Flushing Bay nitrogen loading drives water quality issues in Flushing Meadows-Corona Park. Over $1.2 billion in Jamaica Bay CSO reduction has been committed. Jamaica Bay's salt marsh loss is one of the most significant ecological declines in the NYC metro region.",
            source: "NYC DEP / NYSDEC",
            sourceUrl: "https://www.nyc.gov/site/dep/water/combined-sewer-overflows.page",
            screenshot: "",
            actions: [
                "Fund Jamaica Bay CSO reduction projects and marsh restoration",
                "Accelerate Flushing Bay water quality improvements (green infrastructure, CSO reduction)",
                "Build out sewer separation in Queens' highest-discharge watersheds",
                "Enforce NYSDEC consent orders for CSO reduction deadlines"
            ]
        },
        {
            name: "freshwater withdrawals",
            level: -50,
            indicator: "Per capita daily water consumption",
            value: "~75 gallons/person/day",
            year: 2023,
            target: "Maintain below 80 gallons/person/day",
            context: "NYC is one of the most water-efficient major U.S. cities, consuming roughly 75 gallons per person per day compared to the 88-gallon U.S. average. The Catskill/Delaware watershed supplies over 90% of NYC's drinking water under the landmark 1997 Watershed Agreement. This is one of the city's strongest dimensions and is similar across all five boroughs.",
            source: "NYC DEP Water Supply Reports",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water-supply.page",
            screenshot: "",
            actions: [
                "Maintain Catskill/Delaware watershed protection funding",
                "Continue residential metering and leak detection programs",
                "Expand greywater reuse pilots (DEP, BuildingEnergy programs)",
                "Preserve NYC's filtration-avoidance determination status"
            ]
        },
        {
            name: "land conversion",
            level: 0,
            indicator: "Tree canopy coverage",
            value: "~25% borough-wide; 237,974 street trees (most in NYC)",
            year: 2023,
            target: "30% citywide; close SE Queens heat-equity gap",
            context: "Queens has the most street trees of any NYC borough (237,974) and strong canopy coverage of roughly 25%. Flushing Meadows-Corona Park, Forest Park, and Alley Pond Park anchor green space. Heat island temperature differentials are lower than the Bronx or Brooklyn, but southeast Queens — Jamaica and the Rockaways — experiences elevated heat stress.",
            source: "NYC Parks GIS / NYC TreesCount",
            sourceUrl: "https://tree-map.nycgovparks.org/",
            screenshot: "",
            actions: [
                "Plant trees in SE Queens heat-vulnerable census tracts (Jamaica, Rockaways)",
                "Protect and expand Alley Pond Park and other Queens natural areas",
                "Fund community garden programs in underserved SE Queens neighborhoods",
                "Integrate heat resilience into Queens NYCHA capital plans"
            ]
        },
        {
            name: "biodiversity loss",
            level: -50,
            indicator: "Jamaica Bay Wildlife Refuge habitat area",
            value: "9,100 acres — NYC's single largest natural area",
            year: 2023,
            target: "Halt salt marsh loss; expand Alley Pond Park restoration",
            context: "Jamaica Bay Wildlife Refuge (9,100 acres) is NYC's single largest natural area — internationally important for migrating shorebirds and waterfowl. Queens iNaturalist observations are among the highest per square mile in NYC. Significant salt marsh and coastal habitat exists, though marsh loss is ongoing due to sea-level rise and nitrogen loading.",
            source: "NYC Audubon / iNaturalist NYC / NPS",
            sourceUrl: "https://www.inaturalist.org/places/new-york-us-ny",
            screenshot: "",
            actions: [
                "Protect Jamaica Bay Wildlife Refuge from sea-level rise and marsh loss",
                "Fund Queens citizen-science biodiversity monitoring (iNaturalist, Audubon)",
                "Maintain Alley Pond Park ecological restoration",
                "Advocate federal protection and funding for Jamaica Bay through NPS"
            ]
        },
        {
            name: "air pollution",
            level: 50,
            indicator: "Annual mean PM2.5 concentration",
            value: "~8–9 μg/m³; aviation NO2 elevated near JFK/LaGuardia",
            year: 2024,
            target: "Below 5 μg/m³ (WHO Air Quality Guideline 2021)",
            context: "Queens PM2.5 annual mean is roughly 8–9 μg/m³ — above the WHO guideline of 5 μg/m³ but lower than the Bronx or Manhattan. LaGuardia and JFK aviation emissions elevate southeast Queens NO2. The BQE and Van Wyck Expressway corridors create elevated pollution zones. Asthma ED rates are moderate but elevated in southeast Queens and the Rockaways.",
            source: "NYC DOHMH NYCCAS / EPA AQS",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/air-quality-nyc-community-air-survey.page",
            screenshot: "",
            actions: [
                "Fund community air monitoring in SE Queens and airport corridors",
                "Enforce idling laws + fund enforcement near LaGuardia and JFK",
                "Expand electric school bus deployment in Queens school districts",
                "Continue MTA bus electrification at Queens depots"
            ]
        },
        {
            name: "ozone layer depletion",
            level: -50,
            indicator: "Stratospheric ozone recovery trajectory",
            value: "Projected full recovery by ~2066",
            year: 2024,
            target: "Full ozone layer recovery by 2066 (Montreal Protocol trajectory)",
            context: "Stratospheric ozone depletion is one of the few planetary boundaries trending positively — the 1987 Montreal Protocol successfully phased out CFCs, and the ozone layer is projected to fully recover by around 2066. NYC's contribution at modern scale is negligible. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national ozone monitoring",
            sourceUrl: "https://gml.noaa.gov/ozwv/",
            screenshot: "",
            actions: [
                "Maintain compliance with Montreal Protocol + Kigali Amendment HFC phase-downs",
                "Enforce AIM Act HFC restrictions in refrigeration and cooling",
                "Procure low-GWP refrigerants for city fleets and buildings (DDC, DCAS)",
                "Support continued atmospheric monitoring (advocacy, not local action)"
            ]
        }
    ],
    social: [
        {
            name: "food",
            level: 0,
            indicator: "Adult food insecurity rate",
            value: "~12.5% overall; Far Rockaway/South Jamaica 20–25%",
            year: 2024,
            target: "Below 10% in all community districts",
            context: "Queens adult food insecurity is roughly 12.5% — among the lowest in NYC. But Far Rockaway and South Jamaica community districts run 20–25%. Strong immigrant food networks in Corona, Flushing, and Jackson Heights — including ethnic grocery ecosystems and community mutual aid — offset SNAP enrollment indicators for many households.",
            source: "NYC DOHMH Community Health Profiles",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Expand SNAP outreach in Far Rockaway and South Jamaica in multiple languages",
                "Support immigrant-community food networks and cooperatives (Corona, Flushing, Jackson Heights)",
                "Fund community fridges and food pantries in SE Queens high-need CDs",
                "Strengthen school meal programs and summer feeding in Districts 27 and 29"
            ]
        },
        {
            name: "health",
            level: -50,
            indicator: "Life expectancy",
            value: "81.3 years — highest of all NYC boroughs",
            year: 2025,
            target: "Maintain lead; close SE Queens gap (Far Rockaway/Jamaica)",
            context: "Queens life expectancy is 81.3 years — the highest of all NYC boroughs per the 2025 NYC Health Department report. A strong immigrant-health 'healthy migrant' effect is observed. Disparities exist in Far Rockaway and southeast Queens, and environmental health burdens from JFK/LaGuardia airport emissions affect those communities.",
            source: "NYC DOHMH Health Atlas",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Maintain and expand DOHMH community health programs in SE Queens",
                "Fund Community Health Worker programs targeting SE Queens and Far Rockaway",
                "Monitor and address aviation-related health impacts in JFK/LaGuardia corridors",
                "Expand NYC Care enrollment in highest-uninsured immigrant neighborhoods"
            ]
        },
        {
            name: "education",
            level: 0,
            indicator: "4-year high school graduation rate",
            value: "~86%",
            year: 2023,
            target: "Close chronic absenteeism gap in Districts 27 and 29",
            context: "Queens high school graduation is roughly 86%, above the NYC average. BA+ attainment is about 37%, with wide variance — around 50% in northwest Queens and 28% in southeast Queens. Chronic absenteeism is elevated in Districts 27 (Far Rockaway) and 29 (Jamaica). Language access remains a challenge in Queens' diverse school system.",
            source: "NYSED / NYC DOE",
            sourceUrl: "https://data.nysed.gov/",
            screenshot: "",
            actions: [
                "Reduce chronic absenteeism in Districts 27 and 29 through attendance teams",
                "Expand multilingual family engagement and language access in schools",
                "Increase CUNY pathways from Queens and LaGuardia Community Colleges",
                "Fund community schools with wraparound services in SE Queens"
            ]
        },
        {
            name: "income & work",
            level: 0,
            indicator: "Median household income",
            value: "~$80,000; poverty rate 13.1%",
            year: 2023,
            target: "Reduce child poverty (18%) to below 10%",
            context: "Queens median household income is roughly $80,000 and poverty is 13.1% — among the lowest in NYC. But child poverty is 18% and the working-poor rate is elevated; pockets in Corona and South Jamaica mirror Bronx poverty levels. Queens has the highest density of immigrant small businesses in NYC — a major but underappreciated economic asset.",
            source: "ACS 5-Year Estimates",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand Child Tax Credit + EITC outreach in highest-need Queens CDs (NYC Free Tax Prep)",
                "Support immigrant small-business owners through Queens SBDC and Chhaya CDC",
                "Scale workforce training in health, green construction, and aviation sectors",
                "Invest in childcare accessibility to unlock labor-force participation"
            ]
        },
        {
            name: "housing",
            level: 100,
            indicator: "Eviction filing rate",
            value: "47.1 per 1,000 rental units (2024) — second-highest in NYC",
            year: 2024,
            target: "Below 30 per 1,000; protect immigrant renters in 2–4 family buildings",
            context: "Queens eviction filing rate is 47.1 per 1,000 rental units in 2024 — second-highest in NYC after the Bronx. Severe rent burden affects roughly 28% of renters. Homeownership is 44% — the highest among large NYC boroughs — but two-to-four family rental buildings drive most eviction activity, often involving immigrant tenants and smaller landlords.",
            source: "Furman Center State of the City 2024",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand Right to Counsel enforcement in Queens Housing Court",
                "Fund multilingual tenant legal services for immigrant renters",
                "Preserve affordable housing in 2-4 family buildings through HPD anti-displacement programs",
                "Support Queens community land trusts (Chhaya, South Jamaica)"
            ]
        },
        {
            name: "water & sanitation",
            level: 100,
            indicator: "311 flooding complaints in SE Queens",
            value: "Elevated in Jamaica, Hollis, St. Albans; major Sandy/Ida damage",
            year: 2024,
            target: "Accelerate stormwater infrastructure upgrades in highest-risk CDs",
            context: "NYC drinking water meets 100% EPA standards. Queens 311 flooding complaints are elevated in southeast Queens — Jamaica, Hollis, and St. Albans — where aging stormwater infrastructure and low-lying topography create chronic flood risk. Hurricane Ida and Superstorm Sandy devastated southern Queens and the Rockaways, exposing the depth of infrastructure gaps.",
            source: "NYC DEP / NYC 311",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water.page",
            screenshot: "",
            actions: [
                "Accelerate stormwater infrastructure upgrades in SE Queens (Jamaica, Hollis, St. Albans)",
                "Advance Rockaways coastal resilience projects (Army Corps, NYCEDC)",
                "Fund community-based flood monitoring and early warning in SE Queens",
                "Continue NYC DEP green infrastructure program in Jamaica Bay watershed"
            ]
        },
        {
            name: "energy",
            level: 0,
            indicator: "Household energy burden (% of income)",
            value: "~5–6% of income",
            year: 2024,
            target: "Below 6% for all households; expand clean energy access",
            context: "Queens household energy burden is roughly 5–6% of income — moderate. Single- and two-family housing stock means utility bills are driven by heating fuel and electricity mix. LL97 covers fewer buildings in Queens than Manhattan or Brooklyn, but home heating oil use in older housing stock is a major burden for low-income homeowners.",
            source: "DOE LEAD Tool / NYSERDA",
            sourceUrl: "https://www.energy.gov/scep/slsc/low-income-energy-affordability-data-lead-tool",
            screenshot: "",
            actions: [
                "Expand NYSERDA EmPower+ in Queens NYCHA and LIHTC portfolios",
                "Fund home weatherization and heat pump conversions for low-income homeowners",
                "Transition home heating oil users to cleaner alternatives through NYSERDA",
                "Expand community solar with Queens-based subscription priority"
            ]
        },
        {
            name: "social equity",
            level: 50,
            indicator: "Intra-borough income gap",
            value: "Forest Hills ~$110K vs South Jamaica ~$55K",
            year: 2024,
            target: "Close racial homeownership gap; invest in historically redlined SE Queens",
            context: "Queens is NYC's most diverse borough (138+ languages spoken). Intra-borough income gap is wide: Forest Hills median household income is roughly $110,000 versus South Jamaica at roughly $55,000. Queens has the highest Black and Hispanic homeownership rate in NYC among the five boroughs — but it still lags white homeownership rates, and the racial wealth gap follows citywide patterns.",
            source: "Furman Center / NYC Comptroller",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Expand first-generation homeownership assistance in SE Queens (HPD)",
                "Fund community wealth-building (worker cooperatives, CLTs) in South Jamaica and Far Rockaway",
                "Strengthen multilingual outreach for homeownership programs",
                "Invest in historically redlined SE Queens neighborhoods through CDBG-DR"
            ]
        },
        {
            name: "peace & justice",
            level: 50,
            indicator: "Neighborhood incarceration rate (South Jamaica/Far Rockaway)",
            value: "700–900 per 100,000; borough average 200–350",
            year: 2022,
            target: "NYC average (<400 per 100,000) in all neighborhoods",
            context: "Queens neighborhood incarceration rates average 200–350 per 100,000 borough-wide — among NYC's lowest. But South Jamaica and Far Rockaway spike to 700–900/100K. NYPD precincts 101, 103, and 113 drive most admissions. Language-access gaps in legal proceedings affect immigrant residents disproportionately.",
            source: "NYC Open Data (NYPD) / Prison Policy Initiative",
            sourceUrl: "https://opendata.cityofnewyork.us/",
            screenshot: "",
            actions: [
                "Expand alternatives to incarceration in SE Queens",
                "Fund violence interruption programs in South Jamaica and Far Rockaway",
                "Expand multilingual legal aid for immigrant residents in contact with the courts",
                "Invest in reentry housing and employment in highest-incarceration neighborhoods"
            ]
        },
        {
            name: "political voice",
            level: 50,
            indicator: "Presidential election voter turnout",
            value: "~55%; significant gap between registered and naturalized-eligible voters",
            year: 2024,
            target: "Close naturalization-to-registration gap; raise local turnout above 25%",
            context: "Queens presidential turnout is roughly 55% (2024) and local turnout is around 20%. Queens has a strong naturalized-citizen voter base but a significant gap between registered and naturalized-eligible voters. Language access remains a barrier to full civic participation in one of the most linguistically diverse places on earth.",
            source: "NYC Board of Elections",
            sourceUrl: "https://vote.nyc/",
            screenshot: "",
            actions: [
                "Expand multilingual voter registration and civic engagement programs",
                "Fund NYC Civic Engagement Commission participatory budgeting in Queens CDs",
                "Strengthen ranked-choice voting education in multiple languages",
                "Support immigrant civic engagement organizations (MinKwon, Chhaya, Mixteca)"
            ]
        },
        {
            name: "gender equality",
            level: 50,
            indicator: "Gender wage gap (citywide)",
            value: "~87¢ per dollar earned by men",
            year: 2023,
            target: "Equal pay ($1.00 per dollar)",
            context: "NYC's gender wage gap sits at approximately 87 cents on the dollar citywide. Borough-level wage data is not published; this indicator reflects citywide data and should be read as context rather than a Queens-specific measurement.",
            source: "ACS (citywide)",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand NYC salary transparency law enforcement (NYC CCHR)",
                "Fund childcare accessibility as a labor-force participation lever",
                "Support women-led businesses and cooperatives through Queens SBDC",
                "Close pay disparities in contracted health + human services workforces"
            ]
        },
        {
            name: "networks",
            level: 50,
            indicator: "Residents within half-mile of transit",
            value: "~85%; transit deserts in NE Queens (Bayside, Whitestone) and SE Queens",
            year: 2023,
            target: "Reduce transit deserts; close broadband gap in Far Rockaway and Corona",
            context: "Roughly 85% of Queens residents live within a half-mile of a subway or bus — lower than other boroughs. Major transit deserts exist in northeast Queens (Bayside, Whitestone, Little Neck) and southeast Queens (Rosedale, Laurelton). About 13% of households lack home broadband, rising to 18% in Far Rockaway and Corona, with language-access gaps in digital services compounding the challenge.",
            source: "MTA GTFS / ACS B28002",
            sourceUrl: "https://new.mta.info/developers",
            screenshot: "",
            actions: [
                "Accelerate MTA bus network redesign in NE and SE Queens transit deserts",
                "Fair Fares expansion + multilingual enrollment outreach (DSS, MTA)",
                "Expand NYC Internet Master Plan + Big Apple Connect in Queens NYCHA",
                "Fund multilingual digital literacy programs in immigrant neighborhoods"
            ]
        }
    ]
},
"staten_island_ny": {
    name: "Staten Island",
    population: "~490,000",
    description: "Staten Island is NYC's only borough without subway service and its most car-dependent — 80% car ownership, the highest in the city. It has the starkest North/South divide of any borough: the North Shore (Stapleton, Port Richmond) is majority-minority and lower-income; the South Shore is majority-white and higher-income. Staten Island has the highest opioid overdose rate in NYC, concentrated on the North Shore. The Freshkills landfill-to-park conversion and the Greenbelt are ecological bright spots.",
    ecological: [
        {
            name: "climate change",
            level: 100,
            indicator: "Car-dependent lifestyle per-capita emissions + coastal flood exposure",
            value: "24 killed in Superstorm Sandy; managed-retreat buyouts ongoing",
            year: 2024,
            target: "Net-zero by 2050; full South Shore coastal resilience by 2035",
            context: "Staten Island per-capita emissions are high — single-family homes, car dependency, and higher-income consumption. LL97 covers few buildings on Staten Island. Coastal flood exposure is extreme: Superstorm Sandy killed 24 Staten Island residents and displaced thousands; managed-retreat buyouts are ongoing. Sea-level rise is accelerating the long-term risk.",
            source: "NYC LL84/LL97 / NYC Emissions Inventory",
            sourceUrl: "https://www.nyc.gov/site/sustainability/our-programs/nyc-climate-action.page",
            screenshot: "",
            actions: [
                "Advance managed-retreat and coastal resilience for South Shore communities",
                "Fund home electrification and weatherization for Staten Island homeowners",
                "Expand EV infrastructure as car-dependency makes transportation decarbonization critical",
                "Integrate climate resilience into all Staten Island capital planning"
            ]
        },
        {
            name: "ocean acidification",
            level: 100,
            indicator: "Global ocean pH decline since preindustrial era",
            value: "~0.1 pH units (26% increase in acidity)",
            year: 2024,
            target: "Stabilize below 1.5°C warming (Paris Agreement)",
            context: "Ocean acidification is a global planetary boundary in the red zone — ocean pH has dropped ~0.1 units since preindustrial times, a ~26% increase in acidity. NYC contributes through emissions rather than causing it locally; New York Harbor shows measurable pH decline consistent with regional trends. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national monitoring",
            sourceUrl: "https://gml.noaa.gov/ccgg/carbontracker/",
            screenshot: "",
            actions: [
                "Decarbonize the NYC economy consistent with the 2050 net-zero commitment",
                "Protect NY Harbor coastal ecosystems (Billion Oyster Project, living shorelines)",
                "Monitor and publish NY Harbor pH trends alongside global benchmarks",
                "Advocate federal + international emission reductions through mayoral coalitions"
            ]
        },
        {
            name: "chemical pollution",
            level: 100,
            indicator: "Active Superfund sites",
            value: "Fresh Kills (30-year conversion), Brookfield Landfill (Superfund), Port Richmond shoreline",
            year: 2024,
            target: "Freshkills Park completed; Brookfield Landfill fully remediated",
            context: "Staten Island's Fresh Kills (closed landfill, undergoing a 30-year conversion to parkland) is the largest landfill-to-park conversion in the world at 2,200 acres. The Brookfield Landfill is an active Superfund site. North Shore industrial legacy along Port Richmond's shoreline involves significant contamination. The Arthur Kill and Kill Van Kull have severe historical contamination.",
            source: "EPA CERCLIS / NYSDEC BCP",
            sourceUrl: "https://www.epa.gov/cleanups/cleanups-my-community",
            screenshot: "",
            actions: [
                "Accelerate Fresh Kills Park conversion and soil remediation",
                "Fund Brookfield Landfill Superfund remediation",
                "Restore Port Richmond waterfront and Arthur Kill shoreline",
                "Require community benefit agreements for North Shore industrial redevelopments"
            ]
        },
        {
            name: "nitrogen & phosphorus loading",
            level: 100,
            indicator: "CSO discharge into Arthur Kill, Kill Van Kull, Raritan Bay",
            value: "Award-winning Bluebelt program; $200M+ committed",
            year: 2024,
            target: "50% CSO reduction by 2030; restore Arthur Kill water quality",
            context: "Staten Island CSOs discharge into Arthur Kill, Kill Van Kull, and Raritan Bay — industrial waterways with severe nitrogen/phosphorus loading and historical contamination. Over $200 million has been committed to Staten Island's award-winning Bluebelt green infrastructure program, a watershed approach to stormwater management.",
            source: "NYC DEP / NYSDEC",
            sourceUrl: "https://www.nyc.gov/site/dep/water/combined-sewer-overflows.page",
            screenshot: "",
            actions: [
                "Continue and expand Staten Island Bluebelt green infrastructure program",
                "Fund Arthur Kill and Kill Van Kull water quality monitoring and restoration",
                "Advance CSO reduction in Staten Island's highest-discharge watersheds",
                "Enforce NYSDEC consent orders for CSO reduction deadlines"
            ]
        },
        {
            name: "freshwater withdrawals",
            level: -50,
            indicator: "Per capita daily water consumption",
            value: "~75 gallons/person/day",
            year: 2023,
            target: "Maintain below 80 gallons/person/day",
            context: "NYC is one of the most water-efficient major U.S. cities, consuming roughly 75 gallons per person per day compared to the 88-gallon U.S. average. The Catskill/Delaware watershed supplies over 90% of NYC's drinking water under the landmark 1997 Watershed Agreement. This is one of the city's strongest dimensions and is similar across all five boroughs.",
            source: "NYC DEP Water Supply Reports",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water-supply.page",
            screenshot: "",
            actions: [
                "Maintain Catskill/Delaware watershed protection funding",
                "Continue residential metering and leak detection programs",
                "Expand greywater reuse pilots (DEP, BuildingEnergy programs)",
                "Preserve NYC's filtration-avoidance determination status"
            ]
        },
        {
            name: "land conversion",
            level: -50,
            indicator: "Tree canopy coverage",
            value: "~30% — highest in NYC ('shadiest borough', 2024 tree census)",
            year: 2024,
            target: "Maintain canopy; close North Shore heat-equity gap",
            context: "Staten Island has the highest tree canopy in NYC — roughly 30% borough-wide. The Greenbelt (2,800 acres), Freshkills Park (2,200 acres reclaimed), and High Rock Park anchor green space. The heat island effect is the lowest of any NYC borough. Staten Island was designated the 'shadiest borough' in the 2024 NYC Parks tree census.",
            source: "NYC Parks GIS / NYC TreesCount",
            sourceUrl: "https://tree-map.nycgovparks.org/",
            screenshot: "",
            actions: [
                "Protect the Staten Island Greenbelt from development pressure",
                "Advance Freshkills Park final phases of ecological restoration",
                "Expand tree planting on the North Shore to reduce heat equity gap",
                "Fund community garden and open-space programs in lower-income North Shore neighborhoods"
            ]
        },
        {
            name: "biodiversity loss",
            level: -50,
            indicator: "iNaturalist observations per capita",
            value: "Highest in NYC; Greenbelt supports reptiles, amphibians, insects",
            year: 2023,
            target: "Protect Greenbelt and Clay Pit Ponds from encroachment",
            context: "Staten Island's Greenbelt, Freshkills Park, High Rock Park, and Clay Pit Ponds support significant biodiversity. Staten Island has the highest iNaturalist observations per capita in NYC, with notable populations of reptiles, amphibians, and insects. While Pelham Bay (Bronx) and Jamaica Bay (Queens) exceed Staten Island on bird species, the borough's overall biodiversity is among NYC's strongest.",
            source: "NYC Audubon / iNaturalist NYC",
            sourceUrl: "https://www.inaturalist.org/places/new-york-us-ny",
            screenshot: "",
            actions: [
                "Protect and expand Clay Pit Ponds State Park Preserve",
                "Fund Staten Island citizen-science biodiversity monitoring (iNaturalist, NYC Audubon)",
                "Maintain Freshkills ecological restoration and habitat creation",
                "Protect Staten Island Greenbelt from encroachment and invasive species"
            ]
        },
        {
            name: "air pollution",
            level: 50,
            indicator: "Annual mean PM2.5 concentration",
            value: "~8 μg/m³ — lowest in NYC (WHO guideline: 5 μg/m³)",
            year: 2024,
            target: "Below 5 μg/m³ (WHO Air Quality Guideline 2021)",
            context: "Staten Island PM2.5 annual mean is roughly 8 μg/m³ — above the WHO guideline of 5 μg/m³ but the lowest in NYC. Port Richmond and the Arthur Kill industrial corridor expose North Shore residents to elevated NO2 and PM. Goethals Bridge and Verrazzano-Narrows Bridge truck traffic drives diesel exposure. Asthma ED rates are moderate but elevated on the North Shore.",
            source: "NYC DOHMH NYCCAS / EPA AQS",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/air-quality-nyc-community-air-survey.page",
            screenshot: "",
            actions: [
                "Fund community air monitoring on Staten Island's North Shore and industrial corridor",
                "Enforce idling laws + fund enforcement near Goethals and Verrazzano-Narrows truck routes",
                "Expand electric school bus deployment in Staten Island school districts",
                "Continue MTA bus electrification at Staten Island depots"
            ]
        },
        {
            name: "ozone layer depletion",
            level: -50,
            indicator: "Stratospheric ozone recovery trajectory",
            value: "Projected full recovery by ~2066",
            year: 2024,
            target: "Full ozone layer recovery by 2066 (Montreal Protocol trajectory)",
            context: "Stratospheric ozone depletion is one of the few planetary boundaries trending positively — the 1987 Montreal Protocol successfully phased out CFCs, and the ozone layer is projected to fully recover by around 2066. NYC's contribution at modern scale is negligible. Note: this is a global indicator; severity is the same across all five boroughs.",
            source: "NOAA / EPA national ozone monitoring",
            sourceUrl: "https://gml.noaa.gov/ozwv/",
            screenshot: "",
            actions: [
                "Maintain compliance with Montreal Protocol + Kigali Amendment HFC phase-downs",
                "Enforce AIM Act HFC restrictions in refrigeration and cooling",
                "Procure low-GWP refrigerants for city fleets and buildings (DDC, DCAS)",
                "Support continued atmospheric monitoring (advocacy, not local action)"
            ]
        }
    ],
    social: [
        {
            name: "food",
            level: -50,
            indicator: "Adult food insecurity rate",
            value: "~11.5% overall; North Shore (Stapleton, Port Richmond) 18–22%",
            year: 2024,
            target: "Below 10% in all North Shore neighborhoods",
            context: "Staten Island adult food insecurity is roughly 11.5% — the lowest in NYC. But the North Shore (Stapleton, Port Richmond) runs 18–22%. SNAP enrollment is roughly 15% borough-wide versus 30%+ in the Bronx. Car-dependent food retail means fewer food deserts in the traditional sense, but transportation access is itself a barrier for low-income residents without vehicles.",
            source: "NYC DOHMH Community Health Profiles",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Expand SNAP outreach in Port Richmond and Stapleton",
                "Fund community fridges and food pantries on the North Shore",
                "Strengthen school meal programs and summer feeding in North Shore schools",
                "Support North Shore community gardens and local food access initiatives"
            ]
        },
        {
            name: "health",
            level: 50,
            indicator: "Opioid overdose rate",
            value: "Highest of any NYC borough, 2020–2023",
            year: 2024,
            target: "Reduce opioid overdose rate to NYC average; close North/South life expectancy gap",
            context: "Staten Island life expectancy is roughly 80 years — mid-range among NYC boroughs. North Shore life expectancy drops below 78; South Shore (Tottenville, Great Kills) exceeds 82. Staten Island has the highest opioid overdose rate of any NYC borough from 2020–2023, a public health crisis concentrated on the North Shore and in lower-income communities.",
            source: "NYC DOHMH Health Atlas / NYC Overdose Data",
            sourceUrl: "https://www.nyc.gov/site/doh/data/data-publications/profiles.page",
            screenshot: "",
            actions: [
                "Expand opioid treatment, harm reduction, and naloxone distribution on Staten Island",
                "Fund Staten Island DOHMH Neighborhood Health Action Center on the North Shore",
                "Scale Community Health Worker programs targeting opioid recovery",
                "Address social determinants (housing, income) driving opioid vulnerability on the North Shore"
            ]
        },
        {
            name: "education",
            level: -50,
            indicator: "4-year high school graduation rate",
            value: "~87% — highest in NYC",
            year: 2023,
            target: "Reduce North Shore chronic absenteeism; expand CUNY pathways",
            context: "Staten Island has the highest 4-year high school graduation rate in NYC at roughly 87%, and BA+ attainment is around 37%. A strong public and parochial school system supports outcomes. Chronic absenteeism is concentrated in North Shore schools. The borough benefits from lower poverty rates but faces unmet need in its lower-income communities.",
            source: "NYSED / NYC DOE",
            sourceUrl: "https://data.nysed.gov/",
            screenshot: "",
            actions: [
                "Reduce chronic absenteeism in North Shore schools through attendance supports",
                "Fund community schools in lower-income North Shore neighborhoods",
                "Expand CUNY pathways from College of Staten Island",
                "Ensure equitable resource allocation between North Shore and South Shore schools"
            ]
        },
        {
            name: "income & work",
            level: 0,
            indicator: "Median household income",
            value: "~$99,170 (highest in NYC); North Shore ~$55,000, South Shore ~$110,000",
            year: 2023,
            target: "Raise North Shore incomes; reduce poverty rate (13.2%)",
            context: "Staten Island's median household income is roughly $99,170 — the highest of NYC boroughs (tied with parts of Manhattan). Poverty rate is 13.2%. But the North Shore / South Shore income gap is stark: North Shore around $55,000, South Shore around $110,000. Staten Island's suburban economy concentrates opportunity in professional services and healthcare.",
            source: "ACS 5-Year Estimates",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand workforce development on the North Shore (CUNY, Staten Island Economic Development)",
                "Fund Child Tax Credit + EITC outreach in North Shore communities (NYC Free Tax Prep)",
                "Support North Shore small-business development through NYC SBS",
                "Invest in childcare accessibility to unlock labor-force participation on the North Shore"
            ]
        },
        {
            name: "housing",
            level: -50,
            indicator: "Eviction filing rate",
            value: "~25 per 1,000 rental units — lowest in NYC; homeownership 68%",
            year: 2024,
            target: "Protect affordable North Shore rentals; expand homeownership programs",
            context: "Staten Island has the lowest eviction filing rate in NYC at roughly 25 per 1,000 rental units. Homeownership is 68% — the highest in NYC — which drives the low eviction rate. Severe rent burden still affects roughly 30% of renters who do rent. The rental market is relatively stable compared to other boroughs.",
            source: "Furman Center State of the City 2024",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Protect affordable rental housing on the North Shore from displacement",
                "Expand homeownership programs for low-income Staten Island households",
                "Fund tenant legal services for North Shore renters facing eviction",
                "Support community land trusts on the North Shore to protect long-term affordability"
            ]
        },
        {
            name: "water & sanitation",
            level: 50,
            indicator: "311 flooding complaints concentration",
            value: "Mid-Island and South Shore (Midland Beach, Oakwood, Great Kills); Sandy buyouts ongoing",
            year: 2024,
            target: "Complete managed-retreat buyout program; advance Army Corps South Shore resilience",
            context: "NYC drinking water meets 100% EPA standards. Staten Island 311 flooding complaints concentrate in Mid-Island and the South Shore (Midland Beach, Oakwood, Great Kills) — Superstorm Sandy exposure was severe, and the borough's buyout program is ongoing. Aging infrastructure and sea-level rise are compounding flood risk year over year.",
            source: "NYC DEP / NYC 311",
            sourceUrl: "https://www.nyc.gov/site/dep/water/drinking-water.page",
            screenshot: "",
            actions: [
                "Accelerate managed-retreat buyout program in highest-flood-risk areas",
                "Advance South Shore coastal resilience projects (Army Corps)",
                "Fund green infrastructure for South Shore stormwater management",
                "Coordinate 311 flooding data with NYCEM for rapid response on Staten Island"
            ]
        },
        {
            name: "energy",
            level: 50,
            indicator: "Household energy burden (% of income)",
            value: "~6–7% of income; car dependency drives high per-capita energy use",
            year: 2024,
            target: "Below 6% (national affordability threshold); 50% EV adoption by 2035",
            context: "Staten Island household energy burden is roughly 6–7% of income. Car-dependent lifestyle and larger single-family homes drive high per-capita residential energy use. LL97 covers few buildings on Staten Island (mostly 1–4 family homes), leaving most energy consumption outside the city's main regulatory tool for building decarbonization.",
            source: "DOE LEAD Tool / NYSERDA",
            sourceUrl: "https://www.energy.gov/scep/slsc/low-income-energy-affordability-data-lead-tool",
            screenshot: "",
            actions: [
                "Fund home weatherization and heat pump conversions for Staten Island homeowners",
                "Expand NYSERDA EmPower+ and residential clean energy programs",
                "Transition home heating oil users to cleaner alternatives through NYSERDA",
                "Expand EV charging infrastructure for car-dependent Staten Island households"
            ]
        },
        {
            name: "social equity",
            level: 50,
            indicator: "North Shore / South Shore income gap",
            value: "North Shore majority-minority + lower-income vs. South Shore majority-white + higher-income",
            year: 2024,
            target: "Invest equitably in North Shore communities; close racial income and homeownership gaps",
            context: "Staten Island has a stark North/South divide: the North Shore is majority-minority and lower-income; the South Shore is majority-white and higher-income. The Black-white income gap on Staten Island is substantial and follows citywide patterns. The borough's geographic isolation — the only NYC borough not connected to the subway — reinforces spatial inequality.",
            source: "Furman Center / NYC Comptroller",
            sourceUrl: "https://furmancenter.org/stateofthecity",
            screenshot: "",
            actions: [
                "Fund North Shore economic development through targeted investment (SIEDC)",
                "Expand homeownership programs for North Shore residents (HPD)",
                "Strengthen anti-discrimination enforcement in Staten Island's housing market",
                "Invest in North Shore infrastructure as a racial equity priority"
            ]
        },
        {
            name: "peace & justice",
            level: 0,
            indicator: "Neighborhood incarceration rate",
            value: "~150–250 per 100,000 — lowest in NYC; North Shore neighborhoods higher",
            year: 2022,
            target: "Maintain low borough rate; address NYPD accountability legacy",
            context: "Staten Island neighborhood incarceration rates are roughly 150–250 per 100,000 — the lowest in NYC. North Shore neighborhoods (Stapleton, Park Hill) are higher than the borough average. NYPD precincts 120 and 121 drive most admissions. Staten Island's justice story is distinct: a legacy of Eric Garner and NYPD accountability remains a live issue.",
            source: "NYC Open Data (NYPD) / Prison Policy Initiative",
            sourceUrl: "https://opendata.cityofnewyork.us/",
            screenshot: "",
            actions: [
                "Fund violence-interruption programs on the North Shore (Staten Island)",
                "Enforce NYPD accountability measures following the Eric Garner legacy",
                "Expand alternatives to incarceration on Staten Island",
                "Invest in reentry housing and employment on the North Shore"
            ]
        },
        {
            name: "political voice",
            level: -50,
            indicator: "Presidential election voter turnout",
            value: "~65% — highest with Manhattan",
            year: 2024,
            target: "Close North Shore civic engagement gap; expand multilingual outreach",
            context: "Staten Island presidential turnout is roughly 65% (2024) — the highest with Manhattan. Local turnout is 25–28%. Civic engagement is strong, and the borough's distinct Republican-leaning politics relative to the rest of NYC means it participates robustly in elections even when its politics diverge from citywide trends.",
            source: "NYC Board of Elections",
            sourceUrl: "https://vote.nyc/",
            screenshot: "",
            actions: [
                "Expand Community Board outreach in North Shore communities",
                "Fund multilingual civic engagement for North Shore immigrant residents",
                "Strengthen participatory budgeting in lower-income Staten Island CDs",
                "Engage North Shore community organizations in civic planning processes"
            ]
        },
        {
            name: "gender equality",
            level: 50,
            indicator: "Gender wage gap (citywide)",
            value: "~87¢ per dollar earned by men",
            year: 2023,
            target: "Equal pay ($1.00 per dollar)",
            context: "NYC's gender wage gap sits at approximately 87 cents on the dollar citywide. Borough-level wage data is not published; this indicator reflects citywide data and should be read as context rather than a Staten Island-specific measurement.",
            source: "ACS (citywide)",
            sourceUrl: "https://data.census.gov/",
            screenshot: "",
            actions: [
                "Expand NYC salary transparency law enforcement (NYC CCHR)",
                "Fund childcare accessibility as a labor-force participation lever",
                "Support women-led businesses through Staten Island SBDC",
                "Close pay disparities in contracted health + human services workforces"
            ]
        },
        {
            name: "networks",
            level: 100,
            indicator: "Residents within half-mile of transit",
            value: "~70% — lowest in NYC; no subway; 80% car ownership",
            year: 2023,
            target: "Expand ferry frequency; achieve BRT on major corridors by 2030",
            context: "Roughly 70% of Staten Island residents live within a half-mile of transit — the lowest in NYC. There is no subway service (only the Staten Island Railway). The borough is ferry and express-bus dependent, with car ownership at roughly 80% — the highest in NYC. Only ~10% of households lack home broadband (lowest in NYC), but a persistent North Shore digital gap remains in Stapleton and Port Richmond.",
            source: "MTA GTFS / ACS B28002",
            sourceUrl: "https://new.mta.info/developers",
            screenshot: "",
            actions: [
                "Expand Staten Island ferry frequency and capacity",
                "Expand express bus service to transit-poor areas of Staten Island",
                "Advocate for BRT or light rail on Staten Island's major corridors",
                "Expand Big Apple Connect and broadband access on Staten Island's North Shore"
            ]
        }
    ]
}
};
