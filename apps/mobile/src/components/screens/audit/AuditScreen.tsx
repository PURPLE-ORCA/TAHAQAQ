import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { Typography } from 'heroui-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeScreen } from '@/components/layout/SafeScreen';
import { useAuditFlow } from './hooks/useAuditFlow';
import { AuditHeader } from './ui/AuditHeader';
import { LocationStep } from './ui/LocationStep';
import { CategoryStep } from './ui/CategoryStep';
import { CategoryDetailStep } from './ui/CategoryDetailStep';
import { CommentStep } from './ui/CommentStep';
import { ReviewStep } from './ui/ReviewStep';
import { ThankYouStep } from './ui/ThankYouStep';
import { AuditParams } from './types';

export default function AuditScreen() {
  const params = useLocalSearchParams<AuditParams>();
  const hasRouteEstablishment = typeof params.establishmentId === 'string';

  const {
    loading, selectedEstablishment, errorMsg, showManualSearch, searchQuery, setSearchQuery,
    filteredEstablishments, updateSelectedEstablishment, suggestedEstablishment, setDidSelectManually,
    setManualMode, step, setStep, selectedCategories, onToggleCategory, setCurrentCategoryIndex,
    currentCategory, currentCategoryIndex, hygieneRating, setHygieneRating, staffPresent, setStaffPresent,
    waitMinutes, setWaitMinutes, equipmentCondition, setEquipmentCondition, briberyExperienced,
    setBriberyExperienced, briberyAmount, setBriberyAmount, briberyDescription, setBriberyDescription,
    advanceCategory, comment, setComment, selectedCategorySummaries, submitAudit, submissionCount,
    resetFlow,
  } = useAuditFlow();

  return (
    <SafeScreen scrollable safeArea="both" contentClassName="gap-5 pb-12">
      <AuditHeader step={step} />

      <Animated.View
        key={step}
        entering={FadeIn.duration(180)}
        exiting={FadeOut.duration(140)}
        layout={LinearTransition.springify().damping(18).stiffness(170)}
        className="gap-5"
      >
        {step === 1 && (
          <LocationStep
            loading={loading} selectedEstablishment={selectedEstablishment} errorMsg={errorMsg}
            hasRouteEstablishment={hasRouteEstablishment} showManualSearch={showManualSearch}
            searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredEstablishments={filteredEstablishments}
            updateSelectedEstablishment={updateSelectedEstablishment} suggestedEstablishment={suggestedEstablishment}
            setDidSelectManually={setDidSelectManually} setManualMode={setManualMode} setStep={setStep}
          />
        )}
        {step === 2 && (
          <CategoryStep
            selectedCategories={selectedCategories} onToggleCategory={onToggleCategory}
            setCurrentCategoryIndex={setCurrentCategoryIndex} setStep={setStep}
          />
        )}
        {step === 3 && currentCategory && (
          <CategoryDetailStep
            currentCategory={currentCategory} currentCategoryIndex={currentCategoryIndex}
            totalCategories={selectedCategories.length} hygieneRating={hygieneRating} setHygieneRating={setHygieneRating}
            staffPresent={staffPresent} setStaffPresent={setStaffPresent} waitMinutes={waitMinutes} setWaitMinutes={setWaitMinutes}
            equipmentCondition={equipmentCondition} setEquipmentCondition={setEquipmentCondition}
            briberyExperienced={briberyExperienced} setBriberyExperienced={setBriberyExperienced}
            briberyAmount={briberyAmount} setBriberyAmount={setBriberyAmount}
            briberyDescription={briberyDescription} setBriberyDescription={setBriberyDescription}
            advanceCategory={advanceCategory}
          />
        )}
        {step === 4 && <CommentStep comment={comment} setComment={setComment} setStep={setStep} />}
        {step === 5 && (
          <ReviewStep
            selectedEstablishment={selectedEstablishment} selectedCategories={selectedCategories}
            selectedCategorySummaries={selectedCategorySummaries} comment={comment} setStep={setStep}
            setCurrentCategoryIndex={setCurrentCategoryIndex} submitAudit={submitAudit}
          />
        )}
        {step === 6 && <ThankYouStep submissionCount={submissionCount} resetFlow={resetFlow} />}
      </Animated.View>

      {step !== 6 && (
        <Typography type="body-xs" color="muted" className="text-center">
          All categories are optional. Keep it short, honest, and anonymous.
        </Typography>
      )}
    </SafeScreen>
  );
}
