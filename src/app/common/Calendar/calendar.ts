import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, Input
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarDateFormatter
} from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'events-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //styleUrls: ['styles.css'],
  templateUrl: 'calendar.component.html',
  providers: [{
    provide: CalendarDateFormatter,
    useClass: CustomDateFormatter
  }]
})
export class CalendarComponent {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @Input() eventData;
  view: string = 'month';
  eventDataStr: any = [];
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  ngOnInit() {
    
    setTimeout(() => {
      let booking = this.eventData.Non_Availability.Bookings;
      // this.eventData = this.eventData.Non_Availability.Bookings;
      let notAvailable = this.eventData.Non_Availability.Unavailable;
      for (var i = 0; i < booking.length; i++) {
        this.eventDataStr.push({
          start: new Date(booking[i].Booked_From),
          end: new Date(booking[i].Booked_To),
          title: booking[i].Pooja_Desc + " (" + booking[i].Timing + ")",
          color: colors.red,
          actions: this.actions
        })

      }
      for (var i = 0; i < notAvailable.length; i++) {
        this.eventDataStr.push({
          start: new Date(notAvailable[i].Unavailable_From),
          end: new Date(notAvailable[i].Unavailable_To),
          title: "Pandit ji not available this day.",
        color: colors.blue,
        actions: this.actions
        })

      }
      setTimeout(() => {

        this.refresh.next();
      })
    }, 2000);
  }
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = this.eventDataStr/*[
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      end:null,
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },*//*
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];*/

  activeDayIsOpen: boolean = false;

  constructor() { }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}