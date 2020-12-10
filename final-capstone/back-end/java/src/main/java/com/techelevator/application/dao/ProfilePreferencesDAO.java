package com.techelevator.application.dao;

import com.techelevator.application.model.ProfilePreferences;

public interface ProfilePreferencesDAO {
	public ProfilePreferences addPrefererence(String userName, int preferenceId, int typeId);
	public void updatePreference(ProfilePreferences profilePreference);
	public void deletePreference(ProfilePreferences profilePreference);
}
