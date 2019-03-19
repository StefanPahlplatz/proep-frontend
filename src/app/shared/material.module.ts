import * as material from "@angular/material";
import { A11yModule } from "@angular/cdk/a11y";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  exports: [
    A11yModule,
    BrowserAnimationsModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
    material.MatAutocompleteModule,
    material.MatBadgeModule,
    material.MatBottomSheetModule,
    material.MatButtonModule,
    material.MatButtonToggleModule,
    material.MatCardModule,
    material.MatCheckboxModule,
    material.MatChipsModule,
    material.MatDatepickerModule,
    material.MatDialogModule,
    material.MatDividerModule,
    material.MatExpansionModule,
    material.MatGridListModule,
    material.MatIconModule,
    material.MatInputModule,
    material.MatListModule,
    material.MatMenuModule,
    material.MatNativeDateModule,
    material.MatPaginatorModule,
    material.MatProgressBarModule,
    material.MatProgressSpinnerModule,
    material.MatRadioModule,
    material.MatRippleModule,
    material.MatSelectModule,
    material.MatSidenavModule,
    material.MatSlideToggleModule,
    material.MatSliderModule,
    material.MatSnackBarModule,
    material.MatSortModule,
    material.MatStepperModule,
    material.MatTableModule,
    material.MatTabsModule,
    material.MatToolbarModule,
    material.MatTooltipModule,
    material.MatTreeModule
  ]
})
export class MaterialModule {}
