(function() { // Wrap in IIFE to avoid global scope pollution

    // --- Data Structure ---
    const organisationData = [
        // C-Suite
        { id: 'ceo', title: 'Chief Executive Officer (CEO)', category: 'c-suite', reportsTo: null, responsibilities: ['Ultimate oversight of all company operations including talent development strategy'] },
        { id: 'chro', title: 'Chief Human Resources Officer (CHRO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Primary C-suite executive responsible for L&D function', 'Sets overall talent development vision aligned with business strategy', 'Allocates resources across L&D programmes'] },
        { id: 'cpo', title: 'Chief People Officer (CPO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Works closely with CHRO on employee experience', 'Focuses on culture development and ensuring L&D initiatives support cultural goals'] },
        { id: 'cto', title: 'Chief Technology Officer (CTO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Provides technical infrastructure required for L&D programmes', 'Collaborates on technical skills development content'] },
        { id: 'cfo', title: 'Chief Financial Officer (CFO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Approves L&D budget and investment strategies', 'Analyses ROI of learning initiatives'] },
        { id: 'coo', title: 'Chief Operating Officer (COO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Ensures L&D programmes align with operational needs and workflows', 'Helps identify skill gaps in core operations'] },
        { id: 'cso', title: 'Chief Sustainability Officer (CSO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Collaborates on ESG training initiatives', 'Provides input on sustainability competencies', 'Ensures sustainability principles are integrated into leadership development'] },
        { id: 'cdo_diversity', title: 'Chief Diversity Officer (CDO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Partners with L&D on DEI training programmes', 'Ensures learning content is inclusive and culturally sensitive', 'Co-develops leadership capabilities for managing diverse teams'] },
        { id: 'cdo_digital', title: 'Chief Digital Officer (CDO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Collaborates on digital literacy and transformation learning programmes', 'Provides guidance on emerging digital skills requirements', 'Partners on digital adoption training initiatives'] },
        { id: 'cino', title: 'Chief Innovation Officer (CINO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Works with L&D on innovation capability building', 'Collaborates on design thinking and creativity training', 'Helps identify future skill requirements based on innovation roadmap'] },
        { id: 'cmo', title: 'Chief Marketing Officer (CMO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Partners on customer-centricity training programmes', 'Provides input on external brand perception of learning initiatives', 'Collaborates on communication skills development'] },
        { id: 'cxo', title: 'Chief Experience Officer (CXO)', category: 'c-suite', reportsTo: 'ceo', responsibilities: ['Collaborates on customer experience and employee experience training', 'Provides direction on service design skill requirements', 'Ensures learning programmes align with desired experience outcomes', 'Partners on experience measurement and journey mapping capabilities'] },
        // Executive Leadership
        { id: 'clo', title: 'Chief Learning Officer (CLO)', category: 'executive', reportsTo: 'chro', responsibilities: ['Oversees entire L&D function and strategy', 'Aligns learning initiatives with business objectives', 'Manages relationships with external learning partners'] },
        { id: 'vp_talent', title: 'VP of Talent Development', category: 'executive', reportsTo: 'clo', responsibilities: ['Leads implementation of L&D strategic initiatives', 'Oversees all functional heads below'] },
        // Early Careers Division
        { id: 'dir_early_careers', title: 'Director of Early Careers Programmes', category: 'early-careers', reportsTo: 'vp_talent', responsibilities: ['Oversees all programmes for entry-level talent', 'Develops strategy for attracting and developing new talent'] },
        { id: 'mgr_university', title: 'Manager, University Relations & Recruitment', category: 'early-careers', reportsTo: 'dir_early_careers', responsibilities: ['Builds relationships with educational institutions', 'Oversees campus recruiting efforts', 'Manages internship programme design'] },
        { id: 'mgr_graduate', title: 'Manager, Graduate Development Programmes', category: 'early-careers', reportsTo: 'dir_early_careers', responsibilities: ['Designs and implements rotational programmes', 'Oversees new graduate onboarding curriculum', 'Coordinates mentorship programmes for recent graduates'] },
        { id: 'mgr_early_assessment', title: 'Manager, Early Career Assessment & Advancement', category: 'early-careers', reportsTo: 'dir_early_careers', responsibilities: ['Designs assessment frameworks for early career employees', 'Tracks progression of associates through development pathways', 'Identifies high-potential early career talent'] },
        { id: 'specialist_university', title: 'University Partnership Specialists', category: 'early-careers', reportsTo: 'mgr_university', responsibilities: ['Maintains specific university relationships', 'Coordinates campus events and recruitment activities'] },
        { id: 'coord_graduate', title: 'Graduate Programme Coordinators', category: 'early-careers', reportsTo: 'mgr_graduate', responsibilities: ['Administers day-to-day operation of rotational programmes', 'Supports onboarding logistics and content delivery'] },
        { id: 'coord_internship', title: 'Internship Coordinators', category: 'early-careers', reportsTo: 'mgr_university', responsibilities: ['Manages internship application and placement process', 'Supports intern experience and evaluation'] },
        { id: 'coach_early', title: 'Early Career Coaches', category: 'early-careers', reportsTo: 'mgr_early_assessment', responsibilities: ['Provides one-on-one coaching for new graduates', 'Facilitates peer learning groups'] },
        // Upskilling Division
        { id: 'dir_upskilling', title: 'Director of Professional Development & Upskilling', category: 'upskilling', reportsTo: 'vp_talent', responsibilities: ['Oversees all programmes for current employees\' skill enhancement', 'Develops strategy for continuous improvement of workforce capabilities'] },
        { id: 'mgr_technical', title: 'Manager, Technical Skills Development', category: 'upskilling', reportsTo: 'dir_upskilling', responsibilities: ['Designs programmes for technical competency advancement', 'Coordinates with department heads on technical needs', 'Manages technical training curriculum'] },
        { id: 'mgr_leadership', title: 'Manager, Leadership Development', category: 'upskilling', reportsTo: 'dir_upskilling', responsibilities: ['Oversees leadership training programmes', 'Designs advancement pathways for emerging leaders', 'Coordinates high-potential employee programmes'] },
        { id: 'mgr_business_skills', title: 'Manager, Business & Soft Skills', category: 'upskilling', reportsTo: 'dir_upskilling', responsibilities: ['Designs curriculum for cross-functional business skills', 'Oversees communication, collaboration, and other soft skills programmes', 'Manages change management training'] },
        { id: 'mgr_learning_tech', title: 'Manager, Learning Technology & Innovation', category: 'upskilling', reportsTo: 'dir_upskilling', responsibilities: ['Oversees learning management system and digital learning tools', 'Develops innovative learning approaches (VR, gamification, etc.)', 'Manages learning analytics and reporting'] },
        { id: 'mgr_sustainability', title: 'Manager, Sustainability & ESG Skills', category: 'upskilling', reportsTo: 'dir_upskilling', responsibilities: ['Works closely with the CSO\'s office', 'Develops sustainability training curriculum', 'Integrates ESG principles into existing training programmes'] },
        { id: 'mgr_diversity', title: 'Manager, Diversity & Inclusion Learning', category: 'upskilling', reportsTo: 'dir_upskilling', responsibilities: ['Partners with the CDO\'s office', 'Develops inclusive leadership capabilities', 'Creates and delivers DEI-focused learning content'] },
        { id: 'mgr_experience', title: 'Manager, Experience Design Learning', category: 'upskilling', reportsTo: 'dir_upskilling', responsibilities: ['Works closely with the CXO\'s office', 'Develops customer experience and employee experience training', 'Creates learning programmes on journey mapping and experience design', 'Integrates service design principles into relevant training'] },
        { id: 'specialists_technical', title: 'Technical Training Specialists', category: 'upskilling', reportsTo: 'mgr_technical', responsibilities: ['Develops and delivers technical training content', 'Stays current on industry technical trends', 'Assesses technical competency development'] },
        { id: 'specialists_leadership', title: 'Leadership Development Specialists', category: 'upskilling', reportsTo: 'mgr_leadership', responsibilities: ['Delivers leadership training programmes', 'Coaches emerging leaders', 'Facilitates leadership assessment centres'] },
        { id: 'trainers_business', title: 'Business Skills Trainers', category: 'upskilling', reportsTo: 'mgr_business_skills', responsibilities: ['Develops content for cross-functional business skills', 'Delivers soft skills training', 'Assesses soft skill development'] },
        { id: 'designers_learning', title: 'Learning Experience Designers', category: 'upskilling', reportsTo: 'mgr_learning_tech', responsibilities: ['Creates engaging digital learning content', 'Designs blended learning experiences', 'Develops microlearning modules'] },
        { id: 'specialists_analytics', title: 'Learning Analytics Specialists', category: 'upskilling', reportsTo: 'mgr_learning_tech', responsibilities: ['Analyses learning data', 'Produces dashboard reports', 'Identifies trends and improvement opportunities'] },
        { id: 'specialists_sustainability', title: 'Sustainability Learning Specialists', category: 'upskilling', reportsTo: 'mgr_sustainability', responsibilities: ['Develops training on carbon footprint reduction, circular economy, etc.', 'Creates sustainability case studies and learning activities', 'Stays current on sustainability trends and regulations'] },
        { id: 'specialists_dei', title: 'DEI Learning Specialists', category: 'upskilling', reportsTo: 'mgr_diversity', responsibilities: ['Develops inclusive leadership training content', 'Creates bias awareness and cultural competency programmes', 'Facilitates diversity dialogue sessions'] },
        { id: 'facilitators_innovation', title: 'Innovation & Design Thinking Facilitators', category: 'upskilling', reportsTo: 'mgr_learning_tech', responsibilities: ['Delivers workshops on innovation methodologies', 'Designs experiential innovation learning', 'Facilitates design thinking sprints as learning experiences'] },
        { id: 'specialists_experience', title: 'Experience Design Specialists', category: 'upskilling', reportsTo: 'mgr_experience', responsibilities: ['Develops training on customer and employee experience principles', 'Creates journey mapping and service blueprint workshops', 'Builds empathy and human-centred design capabilities', 'Trains teams on experience measurement and improvement'] },
        // Reskilling Division
        { id: 'dir_reskilling', title: 'Director of Workforce Transformation & Reskilling', category: 'reskilling', reportsTo: 'vp_talent', responsibilities: ['Oversees all programmes for transformative skill changes', 'Develops strategy for adapting workforce to major business shifts'] },
        { id: 'mgr_future_skills', title: 'Manager, Future Skills Assessment', category: 'reskilling', reportsTo: 'dir_reskilling', responsibilities: ['Identifies future skill needs based on business strategy', 'Assesses current workforce capabilities against future needs', 'Develops skill gap analysis reports'] },
        { id: 'mgr_career_transition', title: 'Manager, Career Transition Programmes', category: 'reskilling', reportsTo: 'dir_reskilling', responsibilities: ['Designs comprehensive reskilling pathways', 'Oversees major career transition programmes', 'Coordinates with business units on placement of reskilled employees'] },
        { id: 'mgr_digital_transformation', title: 'Manager, Digital Transformation Learning', category: 'reskilling', reportsTo: 'dir_reskilling', responsibilities: ['Focuses specifically on digital and technological reskilling', 'Coordinates with IT on digital skill requirements', 'Oversees digital literacy baseline programmes'] },
        { id: 'analysts_workforce', title: 'Workforce Skills Analysts', category: 'reskilling', reportsTo: 'mgr_future_skills', responsibilities: ['Conducts skills assessments', 'Maps current to future skill requirements', 'Identifies candidates for reskilling initiatives'] },
        { id: 'specialists_career', title: 'Career Transition Specialists', category: 'reskilling', reportsTo: 'mgr_career_transition', responsibilities: ['Provides guidance to employees undergoing reskilling', 'Facilitates career change conversations', 'Supports job placement for reskilled employees'] },
        { id: 'coord_reskilling', title: 'Reskilling Programme Coordinators', category: 'reskilling', reportsTo: 'mgr_career_transition', responsibilities: ['Administers reskilling curriculum', 'Tracks participant progress', 'Coordinates with external training providers'] },
        { id: 'trainers_digital', title: 'Digital Skills Trainers', category: 'reskilling', reportsTo: 'mgr_digital_transformation', responsibilities: ['Delivers specialised digital upskilling content', 'Facilitates technology adoption programmes', 'Assesses digital competency development'] },
        // Support Functions
        { id: 'dir_learning_ops', title: 'Director of Learning Operations', category: 'support', reportsTo: 'clo', responsibilities: ['Ensures efficient execution of all L&D programmes', 'Manages operational aspects of learning delivery'] },
        { id: 'mgr_learning_ops', title: 'Learning Operations Managers', category: 'support', reportsTo: 'dir_learning_ops', responsibilities: ['Oversees scheduling, logistics, and resource allocation', 'Manages vendor relationships and contracts', 'Coordinates facilities and training equipment'] },
        { id: 'coord_program', title: 'Programme Coordinators', category: 'support', reportsTo: 'mgr_learning_ops', responsibilities: ['Handles day-to-day logistics of learning programmes', 'Manages participant communications', 'Coordinates materials and resources'] },
        { id: 'dir_content', title: 'Director of Learning Content & Curriculum', category: 'support', reportsTo: 'clo', responsibilities: ['Oversees all learning content development', 'Ensures content quality and consistency across programmes'] },
        { id: 'mgr_instructional', title: 'Instructional Design Managers', category: 'support', reportsTo: 'dir_content', responsibilities: ['Leads team of instructional designers', 'Ensures pedagogical quality of learning programmes', 'Implements learning design standards'] },
        { id: 'instructional_designers', title: 'Instructional Designers', category: 'support', reportsTo: 'mgr_instructional', responsibilities: ['Creates learning objectives and assessments', 'Designs learning activities and materials', 'Develops course structures and sequences'] },
        { id: 'content_developers', title: 'Content Developers', category: 'support', reportsTo: 'mgr_instructional', responsibilities: ['Produces learning materials (videos, workbooks, etc.)', 'Manages content management system', 'Updates and refreshes existing content'] },
        { id: 'dir_learning_tech', title: 'Director of Learning Technology', category: 'support', reportsTo: 'clo', responsibilities: ['Oversees all learning technology platforms', 'Drives technology-enabled learning strategy'] },
        { id: 'admin_lms', title: 'Learning Management System (LMS) Administrators', category: 'support', reportsTo: 'dir_learning_tech', responsibilities: ['Manages the LMS platform', 'Sets up and maintains courses and user accounts', 'Generates system reports'] },
        { id: 'specialists_edtech', title: 'Educational Technology Specialists', category: 'support', reportsTo: 'dir_learning_tech', responsibilities: ['Evaluates and implements new learning technologies', 'Supports virtual learning environments', 'Troubleshoots technical issues'] },
        { id: 'dir_analytics', title: 'Director of Learning Analytics & Effectiveness', category: 'support', reportsTo: 'clo', responsibilities: ['Oversees measurement of learning impact', 'Drives continuous improvement based on analytics'] },
        { id: 'mgr_evaluation', title: 'Learning Evaluation Managers', category: 'support', reportsTo: 'dir_analytics', responsibilities: ['Designs evaluation frameworks', 'Implements learning measurement systems', 'Reports on programme effectiveness'] },
        { id: 'analysts_data', title: 'Data Analysts', category: 'support', reportsTo: 'mgr_evaluation', responsibilities: ['Collects and analyses learning data', 'Produces dashboards and reports', 'Identifies patterns and insights from learning metrics'] },
        // Governance Bodies
        { id: 'council_ld', title: 'L&D Council', category: 'governance', reportsTo: null, chair: 'clo', members: 'Representatives from all major business units', responsibilities: ['Meets quarterly to review L&D strategy and priorities', 'Approves major new initiatives'] },
        { id: 'boards_skills', title: 'Skills Advisory Boards', category: 'governance', reportsTo: null, chair: 'Respective functional leaders', members: 'Subject matter experts from the business', responsibilities: ['Provides input on specific skill needs and priorities', 'Reviews curriculum for technical accuracy'] },
        { id: 'council_sustainability', title: 'Sustainability Skills Council', category: 'governance', reportsTo: null, chair: 'CSO and senior L&D leader', members: 'Sustainability experts and business unit representatives', responsibilities: ['Identifies sustainability competencies needed across roles', 'Reviews sustainability content in learning programmes'] },
        { id: 'council_diversity', title: 'Diversity & Inclusion Learning Council', category: 'governance', reportsTo: null, chair: 'CDO and senior L&D leader', members: 'Diverse representatives from across the organisation', responsibilities: ['Reviews learning content for inclusivity and representation', 'Advises on DEI learning objectives and approaches'] },
        { id: 'council_experience', title: 'Experience Design Learning Council', category: 'governance', reportsTo: null, chair: 'CXO and senior L&D leader', members: 'Customer experience, employee experience, and service design experts', responsibilities: ['Reviews experience design learning content and approaches', 'Identifies experience capability needs across the organisation'] },
        { id: 'committee_learning', title: 'Learning Experience Committee', category: 'governance', reportsTo: null, chair: 'Senior L&D representative', members: 'Employees from various levels and departments', responsibilities: ['Provides feedback on learner experience', 'Tests new learning approaches', 'Acts as learning champions across the organisation'] }
    ];

    // --- DOM Element References ---
    const visualization = document.getElementById('visualization');
    const searchBox = document.getElementById('search-roles'); // Use ID for label connection
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gridBtn = document.querySelector('.grid-btn');
    const listBtn = document.querySelector('.list-btn');

    // --- State & Utility Variables ---
    const roleIdMap = {};
    let activeHighlightClearButton = null; // Track the clear button instance

    // --- Pre-computation ---
    organisationData.forEach((role, index) => {
        roleIdMap[role.id] = index;
    });

    // --- Helper Functions ---
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function getRoleById(id) {
        // Check if id exists in map to avoid errors if data is inconsistent
        return id && roleIdMap.hasOwnProperty(id) ? organisationData[roleIdMap[id]] : null;
    }

    function getRoleTitleById(id) {
        if (!id) return 'None';
        const role = getRoleById(id);
        return role ? role.title : 'Unknown Role'; // Return a more descriptive fallback
    }

    // --- Core Logic Functions ---

    /**
     * Creates a DOM element representing a single role card.
     * @param {object} role - The role data object.
     * @returns {HTMLElement} - The role card element.
     */
    function createRoleCard(role) {
        const roleCard = document.createElement('div');
        roleCard.className = `role-card ${role.category}`; // Use className for simplicity
        roleCard.dataset.id = role.id;
        roleCard.dataset.category = role.category;
        roleCard.dataset.reportsTo = role.reportsTo || '';

        // Header
        const headerDiv = document.createElement('div');
        headerDiv.className = 'role-header';
        const titleElement = document.createElement('h3');
        titleElement.textContent = role.title;
        const categoryTag = document.createElement('span');
        categoryTag.className = `category-tag tag-${role.category}`;
        // Capitalize category name for display
        categoryTag.textContent = role.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        headerDiv.appendChild(titleElement);
        headerDiv.appendChild(categoryTag);
        roleCard.appendChild(headerDiv);

        // Reporting Line / Chair Info
        if (role.reportsTo) {
            const reportingLine = document.createElement('div');
            reportingLine.className = 'reporting-line';
            // Use button for accessibility and semantics
            reportingLine.innerHTML = `Reports to: <button type="button" class="reports-to-btn" data-reports-to="${role.reportsTo}">${getRoleTitleById(role.reportsTo)}</button>`;
            roleCard.appendChild(reportingLine);
        } else if (role.category === 'governance' && role.chair) { // Check category for governance specific fields
             const chairInfo = document.createElement('div');
             chairInfo.className = 'reporting-line';
             // Use span as it's informational, not interactive here
             chairInfo.innerHTML = `Chaired by: <span>${role.chair}</span>`;
             roleCard.appendChild(chairInfo);

             if (role.members) { // Only add if members exist
                 const membersInfo = document.createElement('div');
                 membersInfo.className = 'reporting-line';
                 membersInfo.innerHTML = `Members: ${role.members}`;
                 roleCard.appendChild(membersInfo);
             }
        } // Add else if for other non-reporting structures if needed

        // Responsibilities
        if (role.responsibilities && role.responsibilities.length > 0) {
            const responsibilitiesDiv = document.createElement('div');
            responsibilitiesDiv.className = 'responsibilities';
            const responsibilitiesList = document.createElement('ul');
            role.responsibilities.forEach(responsibility => {
                const listItem = document.createElement('li');
                listItem.textContent = responsibility;
                responsibilitiesList.appendChild(listItem);
            });
            responsibilitiesDiv.appendChild(responsibilitiesList);
            roleCard.appendChild(responsibilitiesDiv);
        }

        return roleCard;
    }

    /**
     * Renders the visualization based on the provided data.
     * @param {Array} [filteredData=organisationData] - The data to render.
     */
    function renderVisualization(filteredData = organisationData) {
        // Clear previous content efficiently
        while (visualization.firstChild) {
            visualization.removeChild(visualization.firstChild);
        }
        // Use DocumentFragment for performance when adding multiple elements
        const fragment = document.createDocumentFragment();
        if (filteredData.length === 0) {
             const noResults = document.createElement('p');
             noResults.textContent = 'No roles match the current filter or search criteria.';
             noResults.style.textAlign = 'center';
             noResults.style.padding = '20px';
             fragment.appendChild(noResults);
        } else {
            filteredData.forEach(role => {
                 fragment.appendChild(createRoleCard(role));
            });
        }

        visualization.appendChild(fragment);
        // Note: Click listener for reports-to is delegated to the container (see Event Listeners section)
    }

    /**
     * Filters the data by category and re-renders.
     * @param {string} category - The category to filter by ('all' shows all).
     */
    function filterByCategory(category) {
        let filteredData;
        if (category === 'all') {
            filteredData = organisationData;
        } else {
            filteredData = organisationData.filter(role => role.category === category);
        }
        renderVisualization(filteredData);
        clearHighlights(); // Clear highlights when filter changes
    }

    /**
     * Filters data based on search query and re-renders.
     * @param {string} query - The search term.
     */
    function searchRoles(query) {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            renderVisualization(organisationData); // Show all if query is empty
            clearHighlights();
            return;
        }

        const filteredData = organisationData.filter(role => {
            // Search in title
            if (role.title.toLowerCase().includes(normalizedQuery)) {
                return true;
            }
            // Search in responsibilities
            if (role.responsibilities && role.responsibilities.some(resp => resp.toLowerCase().includes(normalizedQuery))) {
                return true;
            }
             // Search in category name itself (e.g., searching "support")
             if (role.category.replace('-', ' ').toLowerCase().includes(normalizedQuery)) {
                 return true;
             }
            return false;
        });

        renderVisualization(filteredData);
        clearHighlights(); // Clear highlights on search
        // Reset filters to 'all' when searching to avoid confusion
        filterButtons.forEach(btn => {
             const isAllButton = btn.dataset.filter === 'all';
             btn.classList.toggle('active', isAllButton);
             btn.setAttribute('aria-pressed', isAllButton ? 'true' : 'false');
        });

    }

    /**
     * Removes any existing highlight effects and the clear button.
     */
     function clearHighlights() {
        document.querySelectorAll('.role-card.highlight, .role-card.faded').forEach(card => {
            card.classList.remove('highlight', 'faded');
        });
        if (activeHighlightClearButton) {
            activeHighlightClearButton.remove();
            activeHighlightClearButton = null;
        }
    }

    /**
     * Highlights the reporting chain (manager, self, direct reports) and fades others.
     * @param {string} roleId - The ID of the role to start the highlight from.
     */
    function highlightReportingChain(roleId) {
        clearHighlights(); // Clear previous highlights first

        const clickedRole = getRoleById(roleId);
        if (!clickedRole) return; // Exit if role not found

        const highlightIds = new Set();
        highlightIds.add(roleId); // Add the clicked/target role

        // Add manager (if exists)
        if (clickedRole.reportsTo) {
            highlightIds.add(clickedRole.reportsTo);
        }

        // Add direct reports
        organisationData.forEach(role => {
            if (role.reportsTo === roleId) {
                highlightIds.add(role.id);
            }
        });

        // Apply highlight/fade classes
        document.querySelectorAll('.role-card').forEach(card => {
            if (highlightIds.has(card.dataset.id)) {
                card.classList.add('highlight');
                // Scroll the first highlighted card into view smoothly
                if (card.dataset.id === roleId) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            } else {
                card.classList.add('faded');
            }
        });

        // Add a clear button (if one doesn't exist)
        if (!activeHighlightClearButton) {
            const clearButton = document.createElement('button');
            // Use CSS class for styling
            clearButton.className = 'btn btn-reset clear-highlight-btn';
            clearButton.textContent = 'Clear Highlight';
            clearButton.addEventListener('click', clearHighlights);
            document.body.appendChild(clearButton);
            activeHighlightClearButton = clearButton; // Store reference
        }
    }

    // --- Event Listeners ---

    // Filter Buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false'); // Accessibility
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true'); // Accessibility
            filterByCategory(button.dataset.filter);
            searchBox.value = ''; // Clear search when filter is clicked
        });
    });

    // Search (Debounced)
    searchBox.addEventListener('input', debounce((e) => {
        searchRoles(e.target.value);
    }, 300)); // 300ms delay

    // View Toggle
    gridBtn.addEventListener('click', () => {
        if (gridBtn.classList.contains('active')) return; // Do nothing if already active
        listBtn.classList.remove('active');
        gridBtn.classList.add('active');
        listBtn.setAttribute('aria-pressed', 'false');
        gridBtn.setAttribute('aria-pressed', 'true');
        visualization.classList.remove('list-view');
        visualization.classList.add('grid-view');
    });

    listBtn.addEventListener('click', () => {
        if (listBtn.classList.contains('active')) return; // Do nothing if already active
        gridBtn.classList.remove('active');
        listBtn.classList.add('active');
        gridBtn.setAttribute('aria-pressed', 'false');
        listBtn.setAttribute('aria-pressed', 'true');
        visualization.classList.remove('grid-view');
        visualization.classList.add('list-view');
    });

    // Event Delegation for Reporting Line Clicks
    visualization.addEventListener('click', (e) => {
        // Use closest to handle clicks potentially inside the button
        const targetButton = e.target.closest('.reports-to-btn');
        if (targetButton) {
            const reportsToId = targetButton.dataset.reportsTo;
            if (reportsToId) {
                highlightReportingChain(reportsToId);
            }
        }
    });

    // --- Initialisation ---
    renderVisualization(); // Initial render on page load

})(); // End IIFE
