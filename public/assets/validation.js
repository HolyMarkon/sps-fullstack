// Validace formuláře pro sportoviště
function validateLocationForm() {
    const name = document.getElementById('location-name').value.trim();
    const location = document.getElementById('location-address').value.trim();
    const sportId = document.getElementById('sport-select').value;
    
    if (name === '') {
        showToast('Zadejte název sportoviště', 'error');
        return false;
    }
    
    if (location === '') {
        showToast('Zadejte adresu sportoviště', 'error');
        return false;
    }
    
    if (sportId === '') {
        showToast('Vyberte sport', 'error');
        return false;
    }
    
    return true;
}

// Validace formuláře pro rezervace
function validateReservationForm() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const date = document.getElementById('date').value;
    const timeSlot = document.getElementById('time-slot').value;
    const locationId = document.getElementById('location-select').value;
    
    if (firstname === '') {
        showToast('Zadejte jméno', 'error');
        return false;
    }
    
    if (lastname === '') {
        showToast('Zadejte příjmení', 'error');
        return false;
    }
    
    if (date === '') {
        showToast('Vyberte datum', 'error');
        return false;
    }
    
    if (timeSlot === '') {
        showToast('Vyberte časový slot', 'error');
        return false;
    }
    
    if (locationId === '') {
        showToast('Vyberte sportoviště', 'error');
        return false;
    }
    
    return true;
}

// Kontrola konfliktů rezervací
async function checkReservationConflict(date, timeSlot, locationId, excludeId = null) {
    try {
        const response = await fetch('/api/reservations');
        const reservations = await response.json();
        
        const conflict = reservations.find(r => 
            r.date === date && 
            r.time_slot === timeSlot && 
            r.location_id == locationId && 
            r.id != excludeId
        );
        
        if (conflict) {
            showToast(`Konflikt: ${conflict.firstname} ${conflict.lastname} již má rezervaci v tento čas`, 'error');
            return true;
        }
        
        return false;
    } catch (error) {
        console.error('Error checking reservation conflicts:', error);
        return false;
    }
}
