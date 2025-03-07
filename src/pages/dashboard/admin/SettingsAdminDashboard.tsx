import AddSettingsButton from "../../../components/dashboard/settings/AddSettingsModalButton";
import UpdateSettingsButton from "../../../components/dashboard/settings/UpdateSettingsModalButton";
import SettingsList from "../../../components/dashboard/settings/SettingsList";

const SettingsAdminDashboard = () => {
  return (
    <div className="my-9">
      <h2 className="text-3xl font-medium text-white">الإعدادات</h2>
      <div className="flex flex-col sm:flex-row gap-2 my-4">
        <AddSettingsButton />
        <UpdateSettingsButton />
      </div>
      <SettingsList />
    </div>
  );
};

export default SettingsAdminDashboard;
